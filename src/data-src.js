const getData = async ()=>{

    fetch('https://api.covid19api.com/summary')
    .then(res => res.json()).then(data => {console.log(data);
     return data;
    });
}
export default getData;



//<Carddata data={this.state.data} type={true} header="Global Numbers" />
        //<Carddata data={this.state.data} type={false} header="Global Daily Increase" />