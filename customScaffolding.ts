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
    routeTemplate,
    lazyRouteTemplate: routeTemplate,
}

export default customScaffolding
