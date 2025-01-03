let msg: 'Hello' = 'Hello';

msg = 'Hello';

const serverConfig: {
  protocol: 'http' | 'https';
  port: 3000 | 3001;
} = {
  protocol: 'https',
  port: 3001,
};

const port3000: number = 3000;
const port3001: number = 3001;

const startServer: (protocol: 'http' | 'https', port: 3000 | 3001) => string = (
  protocol: 'http' | 'https',
  port: 3000 | 3001
): 'Server started' => {
  console.log(`Server started on ${protocol}://server:${port}`);

  return 'Server started';
};

startServer(serverConfig.protocol, serverConfig.port);

type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in';
type AnimationId = string | number;

function createAnimation(
  id: AnimationId,
  animationName: string,
  timingFunc: AnimationTimingFunc = 'ease',
  duration: number,
  iterCount: 'infinite' | number
): void {
  const elem = document.querySelector(`#${id}`) as HTMLElement;

  if (elem) {
    console.log(`${animationName} ${timingFunc} ${duration} ${iterCount}`);
    elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterCount}}`;
  }
}

createAnimation('id', 'fade', 'ease', 5, 'infinite');

export {};
