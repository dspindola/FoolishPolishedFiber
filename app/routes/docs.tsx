import { renderToReadableStream } from "react-dom/server";

type Props = {
    path: string;
};

export const $route = {
    Component: (_: Props) => {
        return (
            <p>
                docs
            </p>
        );
    },
};

export const $render = async (props: Props) =>
    await renderToReadableStream(<$route.Component {...props} />)