import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Emmy",
    lastName: "Ejeagha",
    email: "emma.ejeagha@gmail.com",
  };
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
        RECENT TRANSACTIONS
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{}, {}]} />
    </section>
  );
};

export default Home;
