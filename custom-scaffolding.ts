const routeTemplate = `
%%tsrImports%%

const Component = () => {
    // Add component logic here

    return <>Hello "%%tsrPath%%"!</>
}

%%tsrExportStart%%{
    component: Component,
}%%tsrExportEnd%%

`

const customScaffolding = {
    lazyRouteTemplate: routeTemplate,
    routeTemplate,
}

export default customScaffolding
