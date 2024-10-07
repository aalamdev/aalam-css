export function Plugin() {
    return {
        name: 'ignore-import-_',
        order: 'pre',
        resolveId(id, module, opts) {
            if (id == '_')  {
                return {id: "https://"}
            }
        }
    }
}
