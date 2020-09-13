function SimpleRoute(path: string) {
    return {
        pattern: path,
        link: () => path,
    }
}

const routes = {
    currentDay: SimpleRoute('/'),
    password: SimpleRoute('/password'),
} as const;

export default routes;
