import Documents from "../Components/Documents";
import Header from "../Components/Header";
import Overview from "../Components/Overview";
import Sidebar from "../Components/Sidebar";
import "./index.css";



const Dashboard = () => {
    return (
        <div className="client">
            <div className="dashboard-container">
                <Sidebar />
                <main className="main-content">
                    <Header />
                    <Overview />
                    <Documents />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;