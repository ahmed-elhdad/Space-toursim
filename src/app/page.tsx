import Header from "@/components/Header/Header";


function Home() {
  return (
    <div className="home flex flex-col items-center justify-center"> 
      <Header />
      <div>
        <h4>So, you want to travel to </h4>
        <h1>Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <div className="main">explore</div>
      </div>
    </div>
  );
}
export default Home;