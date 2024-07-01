import env from "../env.json"

export default Object.fromEntries(Object.entries(env).filter(([key, value]) => key.startsWith("REPL")))