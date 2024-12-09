const products = {

    "Todos" : [

        {"name": "Módulo 550W", "price": 320},
        {"name": "Módulo 555W", "price": 350},
        {"name": "Módulo 575W", "price": 480},
        {"name": "Módulo 600W", "price": 620},
        {"name": "Módulo 630W", "price": 700},
        {"name": "Módulo 650W", "price": 410},
        {"name": "Módulo 690W", "price": 730},
        {"name": "Estrutura Solo", "price": 450},
        {"name": "Estrutura Cerâmica", "price": 600},
        {"name": "Estrutura Fibrocimento", "price": 500},
        {"name": "Estrutura Fibrometal", "price": 700},
        {"name": "Estrutura Laje", "price": 750},
        {"name": "Estrutura Metálica", "price": 800},
        {"name": "Estrutura Mini trilho", "price": 650},
        {"name": "Inversor 5kW", "price": 5000},
        {"name": "Inversor 7kW", "price": 6500},
        {"name": "Inversor 9kW", "price": 8000},
        {"name": "Inversor 11kW", "price": 9500},
        {"name": "Inversor 13kW", "price": 11000},
        {"name": "Inversor 15kW", "price": 13000},
        {"name": "Inversor 17kW", "price": 14500},
        {"name": "Inversor 19kW", "price": 16000},
        {"name": "Inversor 21kW", "price": 17500},
        {"name": "Inversor 23kW", "price": 19000},
        {"name": "Inversor 25kW", "price": 19800},
        {"name": "Inversor 27kW", "price": 18000},
        {"name": "Inversor 29kW", "price": 17000},
        {"name": "Inversor 30kW", "price": 16000},
        {"name": "Cabo 6mm Preto", "price": 4},
        {"name": "Cabo 6mm Vermelho", "price": 4},
        {"name": "ART", "price": 125},
        {"name": "Engenharia", "price": 800},
        {"name": "Instalação", "price": 6000}
    ],
    "Módulos": [
        {"name": "Módulo 550W", "price": 320},
        {"name": "Módulo 555W", "price": 350},
        {"name": "Módulo 575W", "price": 480},
        {"name": "Módulo 600W", "price": 620},
        {"name": "Módulo 630W", "price": 700},
        {"name": "Módulo 650W", "price": 410},
        {"name": "Módulo 690W", "price": 730}
    ],
    
    "Estruturas": [
        {"name": "Estrutura Solo", "price": 450},
        {"name": "Estrutura Cerâmica", "price": 600},
        {"name": "Estrutura Fibrocimento", "price": 500},
        {"name": "Estrutura Fibrometal", "price": 700},
        {"name": "Estrutura Laje", "price": 750},
        {"name": "Estrutura Metálica", "price": 800},
        {"name": "Estrutura Mini trilho", "price": 650}
    ],

    "Inversores": [
        {"name": "Inversor 5kW", "price": 5000},
        {"name": "Inversor 7kW", "price": 6500},
        {"name": "Inversor 9kW", "price": 8000},
        {"name": "Inversor 11kW", "price": 9500},
        {"name": "Inversor 13kW", "price": 11000},
        {"name": "Inversor 15kW", "price": 13000},
        {"name": "Inversor 17kW", "price": 14500},
        {"name": "Inversor 19kW", "price": 16000},
        {"name": "Inversor 21kW", "price": 17500},
        {"name": "Inversor 23kW", "price": 19000},
        {"name": "Inversor 25kW", "price": 19800},
        {"name": "Inversor 27kW", "price": 18000},
        {"name": "Inversor 29kW", "price": 17000},
        {"name": "Inversor 30kW", "price": 16000}
    ],

    "Cabos": [
        {"name": "Cabo 6mm Preto", "price": 4},
        {"name": "Cabo 6mm Vermelho", "price": 4}
    ],

    "Adicionais": [
        {"name": "ART", "price": 125},
        {"name": "Engenharia", "price": 800},
        {"name": "Instalação", "price": 6000}
    ]
}


function update_product_options(select) {
    const category = select.value;
    const input = select.closest('tr').querySelector('.quote-product-input');
    const productList = select.closest('tr').querySelector('.product-list');
    
    productList.innerHTML = '';
    products[category].forEach(product => {

            const item = document.createElement('div');
            item.className = 'product-item';
            item.innerText = `${product.name} - R$ ${product.price}`;
            item.onclick = () => select_product(product.name, product.price, input);
            productList.appendChild(item);
    });
    
//    productList.style.display = productList.children.length ? 'block' : 'none';
}

function select_product(name, price, input) {
    input.value = name;
    const unitInput = input.closest('tr').querySelector('.quote-block-product-input-unit');
    const quantityInput = input.closest('tr').querySelector('.quote-block-product-input-quantity');

    unitInput.value = price;
    quantityInput.value = 1; // Set default quantity to 1
    calculate_total(quantityInput); // Call your function to calculate total
    hide_product_list(input);
}

function filter_products(input) {
    const filter = input.value.toLowerCase();
    const productList = input.closest('tr').querySelector('.product-list');
    const items = productList.getElementsByClassName('product-item');

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const txtValue = item.innerText.toLowerCase();
        item.style.display = txtValue.includes(filter) ? '' : 'none';
    }
}

function show_product_list() {
    

    const productList = event.target.closest('tr').querySelector('.product-list');
    productList.style.display = 'block';
}

function hide_product_list(input) {
    setTimeout(() => {

        const productList = input.closest('tr').querySelector('.product-list');
        productList.style.display = 'none';

    }, 100);
}



function format_currency(input) {
    let value = input.value;

    value = value.replace(/\D/g, '');

    if (value.length > 0) {
        value = (parseInt(value) / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

    }

    input.value = value;
}

function format_currency_value(value) {

    value = String(value).replace(/\D/g, ''); 
    return (parseInt(value) / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function format_numbers(input) {
  let value = input.value;

  value = value.replace(/\D/g, '');

  input.value = value;


}



function calculate_power(el) {
//    el.value = String(el.value).replace(/\D/g, ''); 

    const adequatePowerElement = document.querySelector("#adequatePower");
    
    const irradiationIndex = 4.9;
    const averageConsumptionElement = document.querySelector("#averageConsumption");
    const performanceRateElement = document.querySelector("#performanceRate");
    const averageConsumption = averageConsumptionElement.value;
    const performanceRate = performanceRateElement.value || 0.8;
    const adequatePower = parseFloat((averageConsumption / 30 / irradiationIndex / performanceRate).toFixed(2));
    adequatePowerElement.value = `${adequatePower} kWp`;
    
    calculate_modulus();

}

function calculate_modulus(){

    const adequatePowerElement = document.querySelector("#adequatePower");
    const modulusPowerElement = document.querySelector("#modulusPower");
    const modulusQuantityElement = document.querySelector("#modulusQuantity");

    let adequatePower = adequatePowerElement.value;
    let modulusPower = modulusPowerElement.value;

    adequatePower = parseFloat(Number(adequatePower.replaceAll("kWp", "")).toFixed(2));
    modulusPower = parseInt(modulusPower.replaceAll("W", ""), 10) || 550;

    const modulusQuantity = Math.ceil((adequatePower*1000)/modulusPower);    

    modulusQuantityElement.value = modulusQuantity;


}

function change_performance_rate(){

    const performanceRateElement = document.querySelector("#performanceRate");
    const roofOrientationElement = document.querySelector("#roofOrientation");

    const roofOrientation = roofOrientationElement.value;

    switch(roofOrientation){

        case "Norte":
            performanceRateElement.value = 0.80;
            break;
        case "Sul":
            performanceRateElement.value = 0.60;
            break;
        case "Leste":
        case "Oeste":
            performanceRateElement.value = 0.70;
            break;
        default:
            performanceRateElement.value = 0;
            break;
        }
}


function change_fees(){

    const energyDealershipElement = document.querySelector("#energyDealership");
    const energyCostElement = document.querySelector("#energyCost");
    const tusdFioBElement = document.querySelector("#tusdFIOB");

    const energyDealership = energyDealershipElement.value;
    switch(energyDealership){

          case 'Amazonas Energia':
            tusdFioBElement.value = format_currency_value(0.23);
            break;
          case 'Castro-DIS':
            tusdFioBElement.value = format_currency_value(0.09);
            break;
          case 'CEA Equatorial':
            tusdFioBElement.value = format_currency_value(0.28);
            break;
          case 'Cedrap':
            tusdFioBElement.value = format_currency_value(0.46);
            break;
          case 'Cedri':
            tusdFioBElement.value = format_currency_value(0.15);
            break;
          case 'CEEE Equatorial':
            tusdFioBElement.value = format_currency_value(0.16);
            break;
          case 'CEGERO':
            tusdFioBElement.value = format_currency_value(0.10);
            break;
          case 'Cejama':
            tusdFioBElement.value = format_currency_value(0.22);
            break;
          case 'Celesc-DIS':
            tusdFioBElement.value = format_currency_value(0.12);
            break;
          case 'CELETRO':
            tusdFioBElement.value = format_currency_value(0.12);
            break;
          case 'Cemig-D':
            tusdFioBElement.value = format_currency_value(0.24);
            break;
          case 'Cemirim':
            tusdFioBElement.value = format_currency_value(0.18);
            break;
          case 'Ceprag':
            tusdFioBElement.value = format_currency_value(0.27);
            break;
          case 'Ceraça':
            tusdFioBElement.value = format_currency_value(0.18);
            break;
          case 'Ceral Anitápolis':
            tusdFioBElement.value = format_currency_value(0.18);
            break;
          case 'Ceral Araruama':
            tusdFioBElement.value = format_currency_value(0.47);
            break;
          case 'Ceral DIS':
            tusdFioBElement.value = format_currency_value(0.18);
            break;
          case 'Cerbranorte':
            tusdFioBElement.value = format_currency_value(0.18);
            break;
          case 'CERCI':
            tusdFioBElement.value = format_currency_value(0.44);
            break;
          case 'Cercos':
            tusdFioBElement.value = format_currency_value(0.43);
            break;
          case 'Cerej':
            tusdFioBElement.value = format_currency_value(0.25);
            break;
          case 'Ceres':
            tusdFioBElement.value = format_currency_value(0.49);
            break;
          case 'CERFOX':
            tusdFioBElement.value = format_currency_value(0.15);
            break;
          case 'Cergal':
            tusdFioBElement.value = format_currency_value(0.34);
            break;
          case 'Cergapa':
            tusdFioBElement.value = format_currency_value(0.20);
            break;
          case 'Cergral':
            tusdFioBElement.value = format_currency_value(0.27);
            break;
          case 'Ceriluz':
            tusdFioBElement.value = format_currency_value(0.09);
            break;
          case 'Cerim':
            tusdFioBElement.value = format_currency_value(0.26);
            break;
          case 'Ceripa':
            tusdFioBElement.value = format_currency_value(0.27);
            break;
          case 'Ceris':
            tusdFioBElement.value = format_currency_value(0.33);
            break;
          case 'CERMC':
            tusdFioBElement.value = format_currency_value(0.28);
            break;
          case 'Cermissões':
            tusdFioBElement.value = format_currency_value(0.14);
            break;
          case 'Cermoful':
            tusdFioBElement.value = format_currency_value(0.36);
            break;
          case 'Cernhe':
            tusdFioBElement.value = format_currency_value(0.09);
            break;
          case 'Cerpalo':
            tusdFioBElement.value = format_currency_value(0.28);
            break;
          case 'Cerpro':
            tusdFioBElement.value = format_currency_value(0.22);
            break;
          case 'CERRP':
            tusdFioBElement.value = format_currency_value(0.21);
            break;
          case 'Cersad':
            tusdFioBElement.value = format_currency_value(0.16);
            break;
          case 'Cersul':
            tusdFioBElement.value = format_currency_value(0.17);
            break;
          case 'Certaja':
            tusdFioBElement.value = format_currency_value(0.12);
            break;
          case 'Certel':
            tusdFioBElement.value = format_currency_value(0.21);
            break;
          case 'CERTHIL':
            tusdFioBElement.value = format_currency_value(0.18);
            break;
          case 'Certrel':
            tusdFioBElement.value = format_currency_value(0.44);
            break;
          case 'CERVAM':
            tusdFioBElement.value = format_currency_value(0.24);
            break;
          case 'Cetril':
            tusdFioBElement.value = format_currency_value(0.33);
            break;
          case 'Chesp':
            tusdFioBElement.value = format_currency_value(0.25);
            break;
          case 'Cocel':
            tusdFioBElement.value = format_currency_value(0.14);
            break;
          case 'Codesam':
            tusdFioBElement.value = format_currency_value(0.12);
            break;
          case 'Coopera':
            tusdFioBElement.value = format_currency_value(0.17);
            break;
          case 'Cooperaliança':
            tusdFioBElement.value = format_currency_value(0.16);
            break;
          case 'Coopercocal':
            tusdFioBElement.value = format_currency_value(0.24);
            break;
          case 'Cooperluz':
            tusdFioBElement.value = format_currency_value(0.02);
            break;
          case 'Coopermila':
            tusdFioBElement.value = format_currency_value(0.09);
            break;
          case 'COOPERNORTE':
            tusdFioBElement.value = format_currency_value(0.34);
            break;
          case 'COOPERSUL':
            tusdFioBElement.value = format_currency_value(0.08);
            break;
          case 'COOPERZEM':
            tusdFioBElement.value = format_currency_value(0.21);
            break;
          case 'Coorsel':
            tusdFioBElement.value = format_currency_value(0.23);
            break;
          case 'Copel-DIS':
            tusdFioBElement.value = format_currency_value(0.14);
            break;
          case 'Coprel':
            tusdFioBElement.value = format_currency_value(0.05);
            break;
          case 'CPFL Paulista':
            tusdFioBElement.value = format_currency_value(0.19);
            break;
          case 'CPFL Piratininga':
            tusdFioBElement.value = format_currency_value(0.18);
            break;
          case 'CPFL Santa Cruz (agrupada)':
            tusdFioBElement.value = format_currency_value(0.18);
            break;
          case 'Creluz-D':
            tusdFioBElement.value = format_currency_value(0.15);
            break;
          case 'Creral':
            tusdFioBElement.value = format_currency_value(0.30);
            break;
          case 'Dcelt':
            tusdFioBElement.value = format_currency_value(0.12);
            break;
          case 'Demei':
            tusdFioBElement.value = format_currency_value(0.12);
            break;
          case 'DMED':
            tusdFioBElement.value = format_currency_value(0.19);
            break;
          case 'EDP ES':
            tusdFioBElement.value = format_currency_value(0.17);
            break;
          case 'EDP SP':
            tusdFioBElement.value = format_currency_value(0.18);
            break;
          case 'EFLJC':
            tusdFioBElement.value = format_currency_value(0.26);
            break;
          case 'Eflul':
            tusdFioBElement.value = format_currency_value(0.20);
            break;
          case 'Eletrocar':
            tusdFioBElement.value = format_currency_value(0.19);
            break;
          case 'ELFSM':
            tusdFioBElement.value = format_currency_value(0.18);
            break;
          case 'Enel CE':
            tusdFioBElement.value = format_currency_value(0.28);
            break;
          case 'Enel GO':
            tusdFioBElement.value = format_currency_value(0.26);
            break;
          case 'Enel RJ':
            tusdFioBElement.value = format_currency_value(0.31);
            break;
          case 'Enel SP':
            tusdFioBElement.value = format_currency_value(0.20);
            break;
          case 'Energisa AC':
            tusdFioBElement.value = format_currency_value(0.34);
            break;
          case 'Energisa Borborema':
            tusdFioBElement.value = format_currency_value(0.19);
            break;
          case 'Energisa MG':
            tusdFioBElement.value = format_currency_value(0.21);
            break;
          case 'Energisa MS':
            tusdFioBElement.value = format_currency_value(0.33);
            break;
          case 'Energisa MT':
            tusdFioBElement.value = format_currency_value(0.32);
            break;
          case 'Energisa Nova Friburgo':
            tusdFioBElement.value = format_currency_value(0.19);
            break;
          case 'Energisa PB':
            tusdFioBElement.value = format_currency_value(0.21);
            break;
          case 'Energisa RO':
            tusdFioBElement.value = format_currency_value(0.25);
            break;
          case 'Energisa SE':
            tusdFioBElement.value = format_currency_value(0.26);
            break;
          case 'Energisa TO':
            tusdFioBElement.value = format_currency_value(0.36);
            break;
          case 'Equatorial AL':
            tusdFioBElement.value = format_currency_value(0.52);
            break;
          case 'Equatorial MA':
            tusdFioBElement.value = format_currency_value(0.26);
            break;
          case 'Equatorial PA':
            tusdFioBElement.value = format_currency_value(0.39);
            break;
          case 'Equatorial PI':
            tusdFioBElement.value = format_currency_value(0.32);
            break;
          case 'Equatorial RN':
            tusdFioBElement.value = format_currency_value(0.25);
            break;
          case 'Equatorial SC':
            tusdFioBElement.value = format_currency_value(0.21);
            break;
          case 'Equatorial SA':
            tusdFioBElement.value = format_currency_value(0.39);
            break;
          case 'ESE':
            tusdFioBElement.value = format_currency_value(0.39);
            break;
          case 'Furnas':
            tusdFioBElement.value = format_currency_value(0.08);
            break;
          case 'Germano':
            tusdFioBElement.value = format_currency_value(0.34);
            break;
          case 'Gerusa':
            tusdFioBElement.value = format_currency_value(0.22);
            break;
          case 'Gesel':
            tusdFioBElement.value = format_currency_value(0.20);
            break;
          case 'Gerop':
            tusdFioBElement.value = format_currency_value(0.37);
            break;
          case 'Getel':
            tusdFioBElement.value = format_currency_value(0.33);
            break;
          case 'GVE':
            tusdFioBElement.value = format_currency_value(0.41);
            break;
          case 'Igreja Nova':
            tusdFioBElement.value = format_currency_value(0.32);
            break;
          case 'Iguaçu':
            tusdFioBElement.value = format_currency_value(0.11);
            break;
          case 'Imepac':
            tusdFioBElement.value = format_currency_value(0.15);
            break;
          case 'Imet':
            tusdFioBElement.value = format_currency_value(0.23);
            break;
          case 'Independente':
            tusdFioBElement.value = format_currency_value(0.18);
            break;
          case 'Itaipu':
            tusdFioBElement.value = format_currency_value(0.21);
            break;
          case 'JUPI':
            tusdFioBElement.value = format_currency_value(0.30);
            break;
          case 'Lerner':
            tusdFioBElement.value = format_currency_value(0.27);
            break;
          case 'Luzh':
            tusdFioBElement.value = format_currency_value(0.24);
            break;
          case 'Luzplan':
            tusdFioBElement.value = format_currency_value(0.32);
            break;
          case 'Luzvivo':
            tusdFioBElement.value = format_currency_value(0.28);
            break;
          case 'Luzmar':
            tusdFioBElement.value = format_currency_value(0.13);
            break;
          case 'Magau':
            tusdFioBElement.value = format_currency_value(0.31);
            break;
          case 'Metropar':
            tusdFioBElement.value = format_currency_value(0.22);
            break;
          case 'Miracema':
            tusdFioBElement.value = format_currency_value(0.15);
            break;
          case 'Monassu':
            tusdFioBElement.value = format_currency_value(0.39);
            break;
          case 'Monte Alto':
            tusdFioBElement.value = format_currency_value(0.21);
            break;
          case 'Mundaka':
            tusdFioBElement.value = format_currency_value(0.21);
            break;
          case 'Norte Fluminense':
            tusdFioBElement.value = format_currency_value(0.27);
            break;
          case 'Nordeste':
            tusdFioBElement.value = format_currency_value(0.20);
            break;
          case 'Norte Maranhao':
            tusdFioBElement.value = format_currency_value(0.39);
            break;
          case 'Parana':
            tusdFioBElement.value = format_currency_value(0.24);
            break;
          case 'Paranapanema':
            tusdFioBElement.value = format_currency_value(0.27);
            break;
          case 'Piauí':
            tusdFioBElement.value = format_currency_value(0.25);
            break;
          case 'Planalto':
            tusdFioBElement.value = format_currency_value(0.39);
            break;
          case 'Porto Real':
            tusdFioBElement.value = format_currency_value(0.32);
            break;
          case 'PPM':
            tusdFioBElement.value = format_currency_value(0.27);
            break;
          case 'Pampa':
            tusdFioBElement.value = format_currency_value(0.21);
            break;
          case 'Prata':
            tusdFioBElement.value = format_currency_value(0.21);
            break;
          case 'Rio Claro':
            tusdFioBElement.value = format_currency_value(0.20);
            break;
          case 'S. Antonio Energia':
            tusdFioBElement.value = format_currency_value(0.24);
            break;
          case 'Santa Cruz':
            tusdFioBElement.value = format_currency_value(0.25);
            break;
          case 'São Gabriel':
            tusdFioBElement.value = format_currency_value(0.23);
            break;
          case 'São João':
            tusdFioBElement.value = format_currency_value(0.27);
            break;
          case 'São Miguel':
            tusdFioBElement.value = format_currency_value(0.31);
            break;
          case 'São Paulo':
            tusdFioBElement.value = format_currency_value(0.14);
            break;
          case 'Serrana':
            tusdFioBElement.value = format_currency_value(0.23);
            break;
          case 'Sevale':
            tusdFioBElement.value = format_currency_value(0.18);
            break;
          case 'Soma':
            tusdFioBElement.value = format_currency_value(0.21);
            break;
          case 'Sudoeste':
            tusdFioBElement.value = format_currency_value(0.29);
            break;
          case 'Sulgipe':
            tusdFioBElement.value = format_currency_value(0.30);
            break;
          case 'Sudeste':
            tusdFioBElement.value = format_currency_value(0.21);
            break;
          case 'Sudoeste Capixaba':
            tusdFioBElement.value = format_currency_value(0.29);
            break;
          case 'Santos Dumont':
            tusdFioBElement.value = format_currency_value(0.23);
            break;
          case 'Suldeste':
            tusdFioBElement.value = format_currency_value(0.14);
            break;
          case 'Tocantins':
            tusdFioBElement.value = format_currency_value(0.23);
            break;
          case 'Vale do Paraíba':
            tusdFioBElement.value = format_currency_value(0.23);
            break;
          case 'Vallon':
            tusdFioBElement.value = format_currency_value(0.27);
            break;
          case 'Vermelha':
            tusdFioBElement.value = format_currency_value(0.21);
            break;
          case 'Viana':
            tusdFioBElement.value = format_currency_value(0.23);
            break;
        }
}