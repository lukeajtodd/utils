/**
 * Property Injector (Container Factory)
 * 
 * In the case of a service that would need to be run
 * in the created hook of a component. We can pre-fire
 * the service's main fetch logic and assign the result
 * to the propers of the passed component.
 */
export default (Component, props) => ({
    functional: true,
    props: Component.props,
    render(h, context) {
        return h(Component, {
            props: {
                ...context.props,
                ...props
            }
        });
    }
});