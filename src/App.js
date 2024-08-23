// src/App.js
import React from 'react';
import Title from './components/Title';
import Description from './components/Description';
import Products from './components/Products';

const products = [
  { id: 1, title: 'Mbappe', description: 'Bom jogador', image: 'https://wallpapercave.com/wp/wp9745348.jpg' },
  { id: 2, title: 'Vini Jr', description: 'Bom jogador', image: 'https://frenchfootballweekly.com/wp-content/uploads/2024/03/Real-Madrid-Vinicius-Junior-is-already-impacted-by-the-arrival.jpg' },
  { id: 1, title: 'Rodrygo', description: 'Bom jogador', image: 'https://images7.alphacoders.com/128/1286224.jpg' },
  { id: 1, title: 'Bellingham', description: 'Bom jogador', image: 'https://th.bing.com/th/id/OIP.E5LV7Ptm2GdqlXHPue9rlAHaE8?w=795&h=530&rs=1&pid=ImgDetMain' },
  { id: 1, title: 'Rudiger', description: 'Bom jogador', image: 'https://th.bing.com/th/id/OIP.riMm7EhYG3SnB2U06bzjRAHaE8?rs=1&pid=ImgDetMain' },
  { id: 1, title: 'Endrick', description: 'Bom jogador', image: 'https://th.bing.com/th/id/OIP.3QXXNmhYnXZhHAMFnYuxTAHaE8?rs=1&pid=ImgDetMain' },
  { id: 2, title: 'Modric', description: 'Bom jogador', image: 'https://th.bing.com/th/id/R.e33c518f99c9311da48b83676a7cee50?rik=D0CYGIvTJ4H74w&pid=ImgRaw&r=0' },
  { id: 1, title: 'Arda Guler', description: 'Bom jogador', image: 'https://th.bing.com/th/id/OIP.nMDg7BBtM5aXZANNPsLIIwHaE8?rs=1&pid=ImgDetMain' },
  { id: 1, title: 'Carvajal', description: 'Bom jogador', image: 'https://th.bing.com/th/id/OIP.uEYQbgIWEOGZoUWG-vzN0gHaEK?rs=1&pid=ImgDetMain' },
  { id: 1, title: 'Eder Miltão', description: 'Bom jogador', image: 'https://th.bing.com/th/id/R.005e983442bbdf6b4fe6d41f1006b61a?rik=nUnMMwLc9VkYqA&pid=ImgRaw&r=0' },
  { id: 1, title: 'Camavinga', description: 'Bom jogador', image: 'https://w0.peakpx.com/wallpaper/259/720/HD-wallpaper-soccer-eduardo-camavinga.jpg' },
  { id: 2, title: 'Tchouameni', description: 'Bom jogador', image: 'https://th.bing.com/th/id/OIP.4SvqCw3M6WNh0wSDEAPRowHaE_?rs=1&pid=ImgDetMain' },
  { id: 1, title: 'Alaba', description: 'Bom jogador', image: 'https://th.bing.com/th/id/OIP.6Pp-KewjelhFYbLpRL5EoQHaE7?rs=1&pid=ImgDetMain' },
  { id: 1, title: 'Courtouis', description: 'Bom jogador', image: 'https://phantom-marca.unidadeditorial.es/3f65fbdfbc2d34c2b31645b893fc1093/resize/1320/f/jpg/assets/multimedia/imagenes/2021/11/15/16370080423343.jpg' },
  { id: 1, title: 'Mendy', description: 'Bom jogador', image: 'https://th.bing.com/th/id/OIP.eB5dVeGSfbdJpuEkszKvlgHaD4?rs=1&pid=ImgDetMain' },
  { id: 1, title: 'Valverde', description: 'Bom jogador', image: 'https://th.bing.com/th/id/OIP.yD-dDrzeyxpjiu6aKtOQQAHaEK?rs=1&pid=ImgDetMain' },
  { id: 2, title: 'Nico Paz', description: 'Bom jogador', image: 'https://www.losandes.com.ar/resizer/MrPhjPoXs0krsvFhkIDnALQhrjA=/1023x575/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/AC4LG3MCS5BSHOEIOV5CTYVLUA.jpg' },
  { id: 1, title: 'Cristiano REInaldo', description: 'Melhor de todos os tempos', image: 'https://th.bing.com/th/id/OIP.EpgEUB_Cq_RpqeQtIAFQQgHaEK?rs=1&pid=ImgDetMain' },
  { id: 1, title: 'Meçi', description: 'Bom jogador', image: 'https://th.bing.com/th/id/OIP.it_JQE9wSkOzORA6QE1yEAHaE7?rs=1&pid=ImgDetMain' },
  { id: 1, title: 'Meçi', description: 'PIPOCA', image: 'https://preview.redd.it/wh6yphbr1r3a1.jpg?width=1600&format=pjpg&auto=webp&s=ef8789a6c08c11294a78020cc0e307ad4d57c0e4' },
];

const App = () => (
  <div>
    <Title>Jogadores Real Madrid 202</Title>
    <Description>Galaticos da nova geração</Description>
    <Products products={products} />
  </div>
);

export default App;
