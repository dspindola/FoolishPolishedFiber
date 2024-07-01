import { renderToReadableStream } from "react-dom/server";

type Props = {
  path: string;
};

export const $route = {
  Component: (props: Props) => {
    const version = Bun.version;
    return (
      <p>
        {props.path}
        <div>{version}</div>
      </p>
    );
  },
};

export const $render = async (props: Props) =>
  await renderToReadableStream(<$route.Component {...props} />).then(
    async (route) => {
      await route.allReady;
      return route;
    },
  );
