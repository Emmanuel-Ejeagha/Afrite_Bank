import HeaderBox from "@/components/HeaderBox";
import TotalBalBox from "@/components/TotalBalBox";

const Home = () => {
  const loggedIn = { firstName: "Emmy" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Manage your account and transactions with ease and efficiency."
          />
          <TotalBalBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2500.5}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
