import Style from './Main.module.css'
import eyecon from '../assets/icon.png'

function Main() {

    return (
        <div className={Style.main}>
            <div className={Style.navbar}></div>
            <div className={Style.parent}>
                <div className={Style.child1}>
                    <div className={Style.box}><h2><span className={Style.span}>12</span>Quiz created</h2></div>
                    <div className={Style.box2}><h2><span className={Style.span}>110</span>questions created</h2></div>
                    <div className={Style.box3}><h2><span className={Style.span}>1.4K</span>Total impressions</h2></div>
                </div>
                <div className={Style.child2}>
                    <div className={Style.container}>
                        <h2 className={Style.heading}>Trending Quizes</h2>
                        <div className={Style.boxparent1}>
                            <div className={Style.box1}>
                                <h1 className={Style.header}>Quiz1 <span className={Style.spantag}>667</span>
                                    <img src={eyecon} /></h1>
                                <p>created on: 04sep, 2023</p>
                            </div>
                            <div className={Style.box1}>
                                <h1 className={Style.header}>Quiz1 <span className={Style.spantag}>667</span><img src={eyecon} /></h1>
                                <p>created on: 04sep, 2023</p>
                            </div>
                            <div className={Style.box1}>
                                <h1 className={Style.header}>Quiz1 <span className={Style.spantag}>667</span><img src={eyecon} /></h1>
                                <p>created on: 04sep, 2023</p>
                            </div>
                            <div className={Style.box1}>
                                <h1 className={Style.header}>Quiz1 <span className={Style.spantag}>667</span><img src={eyecon} /></h1>
                                <p>created on: 04sep, 2023</p>
                            </div>
                        </div>
                        <div className={Style.boxparent1}>
                            <div className={Style.box1}>
                                <h1 className={Style.header}>Quiz1 <span className={Style.spantag}>667</span><img src={eyecon} /></h1>
                                <p>created on: 04sep, 2023</p>
                            </div>
                            <div className={Style.box1}>
                                <h1 className={Style.header}>Quiz1 <span className={Style.spantag}>667</span><img src={eyecon} /></h1>
                                <p>created on: 04sep, 2023</p>
                            </div>
                            <div className={Style.box1}>
                                <h1 className={Style.header}>Quiz1 <span className={Style.spantag}>667</span><img src={eyecon} /></h1>
                                <p>created on: 04sep, 2023</p>
                            </div>
                            <div className={Style.box1}>
                                <h1 className={Style.header}>Quiz1 <span className={Style.spantag}>667</span><img src={eyecon} /></h1>
                                <p>created on: 04sep, 2023</p>
                            </div>
                        </div>
                        <div className={Style.boxparent1}>
                            <div className={Style.box1}>
                                <h1 className={Style.header}>Quiz1 <span className={Style.spantag}>667</span><img src={eyecon} /></h1>
                                <p>created on: 04sep, 2023</p>
                            </div>
                            <div className={Style.box1}>
                                <h1 className={Style.header}>Quiz1 <span className={Style.spantag}>667</span><img src={eyecon} /></h1>
                                <p>created on: 04sep, 2023</p>
                            </div>
                            <div className={Style.box1}>
                                <h1 className={Style.header}>Quiz1 <span className={Style.spantag}>667</span><img src={eyecon} /></h1>
                                <p>created on: 04sep, 2023</p>
                            </div>
                            <div className={Style.box1}>
                                <h1 className={Style.header}>Quiz1 <span className={Style.spantag}>667</span><img src={eyecon} /></h1>
                                <p>created on: 04sep, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;