import {useSpring, animated} from 'react-spring';
import {useInView} from 'react-intersection-observer';
import './App.css';

function App() {
    const headerAnimation = useSpring({
        from: {opacity: 0, transform: 'translateY(30px)'},
        to: {opacity: 1, transform: 'translateY(0)'},
        delay: 200
    });

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    const workAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)'
    });

    const useFadeIn = () => {
        const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.3
        });
        return {
            ref,
            style: useSpring({
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(50px)'
            })
        };
    };

    const project1Animation = useFadeIn();
    const project2Animation = useFadeIn();
    const project3Animation = useFadeIn();
    const project4Animation = useFadeIn();


    return (
        <div className="App">
            <div className={"content-container"}>
                <animated.div style={headerAnimation} className="header">
                    <h1>Matias Mikkola</h1>
                    <p>Software Engineer, interested in product usability, front-end development, and design
                        patterns.</p>
                </animated.div>
                <animated.div ref={ref} style={workAnimation} className="section">
                    <h1>Work</h1>
                    <animated.div {...project1Animation} className="sub-section">
                        <h4>Ringler Informatik</h4>
                        <p>Led the development of tax-filing portals across three Swiss cantons using React and Redux,
                            connecting to a
                            Rust and Java backend via REST APIs. Used by tens of thousands of users to successfully file
                            taxes.</p>
                        <p>Each portal is adopted by the government as the official tax filing solution in the
                            canton.</p>
                        <p><a href={"https://etax.gl.ch/"}>eTax Glarus</a></p>
                        <p><a href={"https://steuerpotal.ow.ch/"}>Steuerportal Obwalden</a></p>
                        <p><a href={"https://steuerpotal.nw.ch/"}>Steuerportal Nidwalden</a></p>
                    </animated.div>
                    <animated.div {...project2Animation} className="sub-section">
                        <h4>BlockFi Inc</h4>
                        <p>In charge of the web infrastructure, enabling feature teams (25 developers) to develop
                            efficiently by improving
                            the codebase and tooling.</p>
                        <p>Enabled ESLint, Prettier, transitioned from Webpack to Vite to improve load times, integrated
                            Datadog for analytics and metrics on the platform, on a large monolith React and Redux
                            repository.</p>
                        <p><a href={"https://blockfi.com/"}>BlockFi</a></p>
                    </animated.div>
                    <animated.div {...project3Animation} className="sub-section">
                        <h4>Elephant Healthcare</h4>
                        <p>Built a cloud based healthcare portal used in African and Asian clinics, improving clinic
                            efficiency and medical reliability.</p>
                        <p>Developed services for clinics, including a billing system, insurance claim system,
                            benefitting
                            over 50,000 patients across multiple countries.</p>
                        <p><a href={"https://elephant.healthcare/"}>Elephant Healthcare</a></p>
                    </animated.div>
                    <animated.div {...project4Animation} className="sub-section">
                        <h4>Infinity Works (Accenture)</h4>
                        <p>Helped a large digital transformation of a large british grocery store, transitioning
                            features
                            from Websphere Commerce platform to a
                            React and Redux application, with a Golang service layer.</p>
                        <p>Developed the product-detail page, to increase customer awarness on product details.</p>
                        <p>Project led to a £2.7 million quartery increase in feature revenue.</p>
                        <p><a href={"https://www.sainsburys.co.uk/shop/gb/groceries"}>Sainsbury's</a></p>
                    </animated.div>
                </animated.div>
            </div>
        </div>
    );
}

export default App;