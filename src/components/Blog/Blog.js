



const Blog = () => {

    return (
        <div className="m-10 p-10">
            <div>
                <h2 className="text-3xl text-center capitalize text-info mb-10">Simple Question of React</h2>
                <h3 className="fw-bold text-2xl capitalize mb-2">1.how does context api work ?</h3>
                <p className="fw-bold capitalize">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div>
                <h3 className="fw-bold text-2xl capitalize mb-2">2. what is useHref ?</h3>
                <p className="fw-bold capitalize"> The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. Tip: You may be interested in taking a look at the source for the link component in react-router-dom to see how it uses useHref internally to determine its own href value.</p>
            </div>
            <div>
                <h3 className="fw-bold text-2xl capitalize mb-2">3.what is the purpose of react router ?</h3>
                <p className="fw-bold capitalize">ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>




        </div>
    );
};

export default Blog;