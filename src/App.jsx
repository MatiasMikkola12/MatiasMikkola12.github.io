import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './App.css';

function App() {
    const headerAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(30px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 200
    });

    const { ref, inView } = useInView({
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

    return (
        <div className="App">
            <animated.div style={headerAnimation} className="header">
                <h1>Matias Mikkola</h1>
                <p>Software Engineer, some content coming up.</p>
            </animated.div>
            <animated.div ref={ref} style={workAnimation} className="section">
                <h1>Work</h1>
                <animated.div {...project1Animation} className="sub-section">
                    <p>Project 1 Description: This project involved...</p>
                </animated.div>
                <animated.div {...project2Animation} className="sub-section">
                    <p>Project 2 Overview: In this work, I focused on...</p>
                </animated.div>
                <animated.div {...project3Animation} className="sub-section">
                    <p>Project 3 Summary: The main challenges were...</p>
                </animated.div>
            </animated.div>
        </div>
    );
}

export default App;