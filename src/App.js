import React, { useEffect } from 'react';
import Jumbotron from "./components/Jumbotron"
import Social from "./components/Social"
import Videos from "./components/Videos";
import Websites from "./components/Websites";
import Resources from "./components/Resources";

function App() {

  useEffect(() => {
    window.MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/@badgerdao","postsPerLine":4,"limit":4,"picture":"big","fields":["description","author","claps","publishAt"],"ratio":"original"}});
  });

  const external = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fillRule="evenodd" d="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"></path></svg>;

  return (
    <div className="App">
      <div className="container-fluid no-p">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 text-center">
              <a className="blog-header-logo text-light" href="/">
                <img src="/logo-name.png" alt="logo" width="280" height="70"/>
                <span className="comm-text">Community</span>
              </a>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-around">
            <a className="p-2 text-muted" href="#blog">Blog Posts</a>
            <a className="p-2 text-muted" href="#videos">Videos</a>
            <a className="p-2 text-muted" href="#websites">Community Websites</a>
            <a className="p-2 text-muted" href="#resources">Resources</a>
            <a className="p-2 text-muted" href="https://app.badger.finance/" target="_blank">
              Badger Finance App
              {external}
            </a>
            <a className="p-2 text-muted" href="https://badger-finance.gitbook.io/badger-finance/" target="_blank">
              Documentation
              {external}
            </a>
            <a className="p-2 text-muted" href="https://badger.finance/" target="_blank">
              Badger DAO Home
              {external}
            </a>
          </nav>
        </div>
      
        
        <main className="border-top">

              <div className="row jumbotron jumbotron-fluid text-black bg-light text-center mx-auto mb-0">
                <div className="col-6">
                  <img src="/badger-builder.png" alt="Badger Builder" width="300" className=""/>
                </div>
                <div className="col-6">
                  <p className="lead" style={{maxWidth: "550px"}}>
                    Badger DAO is an open source DAO dedicated to building products and infrastructure to bring Bitcoin to DeFi.
                  </p>
                  <p className="lead" style={{maxWidth: "550px"}}>
                    The DAO's debut products are Sett, a yield aggregator, and Digg, a BTC-pegged elastic supply currency.
                  </p>
                </div>
              </div>
          

          <Jumbotron />
          <Social />
          
          <a name="blog" href="#" />
          <div className="row border-bottom">
            <h5 className="ml-5">Recent Blog Posts</h5>
            <div id="medium-widget" className="py-1 px-5"></div>
            <div className="col text-right">
              <a href="https://badgerdao.medium.com/" className="btn btn-warning mr-5 mb-4" target="_blank">Read More {external}</a>
            </div>
          </div>

          <a name="videos" href="#" />
          <Videos />

          <div className="row mb-5">
            <a name="websites" href="#" />
            <div className="col-6">
              <Websites />
            </div>

            <a name="resources" href="#" />
            <div className="col-6">
            <Resources />
            </div>
          </div>

        </main>
      </div>

      <footer className="blog-footer">
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
