
import './App.css';
import { Pricemenu } from './Pricemenu';

function App() { 
  const data = [{
    plan: "free",
    price: "$0",
    features: [
      {
        title: "Single User",
        available: true
      },
      {
        title: "5GB Storage",
        available: true
      },
      {
        title: "Unlimited Public Projects",
        available: true
      },
      {
        title: "Community Access",
        available: true
      },
      {
        title: "Unlimited Private Projects",
        available: false
      },
      {
        title: "Dedicated Phone Support",
        available: false
      },
      {
        title: "Free Subdomain",
        available: false
      },
      {
        title: "Monthly Status Reports",
        available: false
      }
    ]
  },
  {
    plan: "PLUS",
    price: "$9",
    features: [
      {
        title: "5 Users",
        available: true,
        highlight: true
      },
      {
        title: "50GB Storage",
        available: true
      },
      {
        title: "Unlimited Public Projects",
        available: true
      },
      {
        title: "Community Access",
        available: true
      },
      {
        title: "Unlimited Private Projects",
        available: true
      },
      {
        title: "Dedicated Phone Support",
        available: true
      },
      {
        title: "Free Subdomain",
        available: true
      },
      {
        title: "Monthly Status Reports",
        available: false
      }
    ]
  },
  {
    plan: "PRO",
    price: "$49",
    features: [
      {
        title: "Unlimited Users",
        available: true,
        highlight: true
      },
      {
        title: "150GB Storage",
        available: true
      },
      {
        title: "Unlimited Public Projects",
        available: true
      },
      {
        title: "Community Access",
        available: true
      },
      {
        title: "Unlimited Private Projects",
        available: true
      },
      {
        title: "Dedicated Phone Support",
        available: true
      },
      {
        title: "Unlimited Free Subdomains",
        available: true
      },
      {
        title: "Monthly Status Reports",
        available: true
      }
    ]
  }
  ];

  return (
    <div className="App">      
      <section class="pricing py-5">     
        <div class='container'>
          <div class='row'>          
      {data.map((a) =>{
        return <Pricemenu content = {a}/>
      })}  
          </div>
        </div>        
      </section>
    </div>
  );
  }

export default App;


