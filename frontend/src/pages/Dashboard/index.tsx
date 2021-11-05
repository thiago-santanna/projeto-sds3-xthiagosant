import BarChart from "components/charts/bar-chart";
import DonutChart from "components/charts/donut-chart";
import DataTable from "components/data-table";
import Footer from "components/footer";
import Navbar from "components/navbar";

const Dashboard = () => {

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Taxa de sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5>Todas vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  )
}

export default Dashboard;