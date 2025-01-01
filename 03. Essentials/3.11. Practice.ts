namespace Media {
  export enum Type {
    Video = 'video',
    Audio = 'audio',
  }

  export enum Format {
    MP4 = '.mp4',
    MOV = '.mov',
    MKV = '.mkv',
    FLV = '.flv',
    WEBM = '.webm',
  }

  export type TimeMarkType = string;
  export type MarksType = TimeMarkType[] | string;

  export interface Props {
    name: string;
    type: Type;
    format: Format;
    subtitles?: string;
    marks?: MarksType;
  }

  export const DEFAULT_CONFIG: Props = {
    name: 'example',
    type: Type.Video,
    format: Format.MP4,
  };
}

class MediaPlayer {
  private static formatMarks(marks?: Media.MarksType): string {
    if (!marks) return 'none';

    if (Array.isArray(marks)) {
      return marks.join(' ');
    }

    if (typeof marks === 'string') {
      return marks;
    }

    return 'Unsupported type of marks';
  }

  private static formatSubtitles(subtitles?: string): string {
    return subtitles ?? 'none';
  }

  static play(props: Media.Props = Media.DEFAULT_CONFIG): string {
    const { name, format, type, subtitles, marks } = props;

    const mediaInfo = {
      title: `${name}${format}`,
      type,
      marks: this.formatMarks(marks),
      subtitles: this.formatSubtitles(subtitles),
    };

    console.log(
      `Media ${mediaInfo.title} is ${mediaInfo.type}
      Marks: ${mediaInfo.marks}
      Subtitles: ${mediaInfo.subtitles}`
    );

    return 'Media started';
  }
}

MediaPlayer.play({
  name: 'WoW',
  format: Media.Format.MOV,
  type: Media.Type.Video,
  subtitles: 'hmhmhm hmhmhm doh',
  marks: ['4:30', '5:40'],
});
