import { Commercial } from '@/models/commercials'

export const commercialMock = [
  {
    news: {
      type: 'JPan',
      title:
        'Haddad anuncia proposta de reoneração gradual da folha de pagamento',
      image_url:
        'https://jpimg.com.br/uploads/2023/07/53060053314_3226ba1e40_k-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/economia/haddad-anuncia-proposta-de-reoneracao-gradual-da-folha-de-pagamento.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title:
        'Gerdau (GOAU4) e mais 13 ações: a seleção do fundo que rendeu 150% do Ibovespa',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/stock-exchange-trading-forex-finance-graphic-concept-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/economia/gerdau-goau4-e-mais-13-acoes-a-selecao-do-fundo-que-rendeu-150-do-ibovespa.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title:
        'EUA e México relatam avanços na questão migratória após visita de Blinken',
      image_url: 'https://jpimg.com.br/uploads/2023/12/000_34949bl-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/eua-e-mexico-relatam-avancos-na-questao-migratoria-apos-visita-de-blinken.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title: 'Líder norte-coreano quer ‘acelerar’ preparativos para guerra',
      image_url:
        'https://jpimg.com.br/uploads/2021/02/2021-02-12t223256z_1_lynxmpeh1b1ru_rtroptp_4_northkorea-politics-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/lider-norte-coreano-quer-acelerar-preparativos-para-guerra.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title: 'Torre Eiffel é fechada devido à greve de funcionários',
      image_url:
        'https://jpimg.com.br/uploads/2022/07/torre-eiffel-caindo-aos-pedacos-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/torre-eiffel-e-fechada-devido-a-greve-de-funcionarios.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title:
        'Qual o futuro de Trump com as acusações e o que esperar das eleições dos EUA em 2024?',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/donald-trump-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/qual-o-futuro-de-trump-com-as-acusacoes-e-o-que-esperar-das-eleicoes-dos-eua-em-2024.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title:
        'Metade da população mundial vai às urnas em 2024 e coloca em jogo a atual ordem mundial',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/bidene-trump-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/metade-da-populacao-mundial-vai-as-urnas-em-2024-e-coloca-em-jogo-a-ordem-mundial.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title:
        '‘New York Times’ processa OpenAI e Microsoft por violação de direitos autorais',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/2023-12-27t222041z_1461342175_rc2y55aamo33_rtrmadp_3_openai-microsoft-new-york-times-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/new-york-times-processa-openai-e-microsoft-por-violacao-de-direitos-autorais.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title:
        'Lula veta partes do projeto de lei que flexibiliza regras para defensivos agrícolas no Brasil',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/age20231222004-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/politica/lula-veta-partes-do-projeto-de-lei-que-flexibiliza-regras-para-defensivos-agricolas-no-brasil.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title:
        'Morre aos 98 anos Jacques Delors, pai do euro e idealizador da União Europeia ',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/fundador-da-uniao-europeia-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/morre-aos-98-anos-jacques-delors-pai-do-euro-e-idealizador-da-uniao-europeia.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title:
        'Suprema Corte de Michigan rejeita ação contra Trump e decide que ex-presidente pode concorrer em 2024',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/063_1868621960-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/suprema-corte-de-michigan-rejeita-acao-contra-trump-e-decide-que-ex-presidente-pode-concorrer-em-2024.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title:
        'Idosa sofre mal súbito e morre na Itália após recebe por engano conta de água avaliada em mais de 15 mil euros',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/conta-de-agua-de-15-mil-euros-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/idosa-sofre-mal-subito-e-morre-na-italia-apos-recebe-por-engano-conta-de-agua-avaliada-em-mais-de-15-mil-euros.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title:
        'Bolsa chega a 134 mil pontos e bate recorde pela quarta vez consecutiva',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/collage-finance-banner-concept-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/economia/bolsa-chega-a-134-mil-pontos-e-bate-recorde-pela-quarta-vez-consecutiva.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title:
        'Erdogan diz que não há diferença entre Netanyahu e Hitler e chama israelense de ‘açougueiro de Gaza’',
      image_url:
        'https://jpimg.com.br/uploads/2022/03/recep-tayyip-erdogan-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/erdogan-diz-que-nao-ha-diferenca-entre-netanyahu-e-hitler-e-chama-israelense-de-acougueiro-de-gaza.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title:
        'Metrô de São Paulo monta operação especial para a festa da virada na Avenida Paulista; veja como vai funcionar',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/fup20231127149-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/brasil/metro-de-sao-paulo-monta-operacao-especial-para-a-festa-da-virada-na-avenida-paulista-veja-como-vai-funcionar.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title:
        'Réveillon na Paulista terá esquema de segurança especial; confira',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/avenida-paulista-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/brasil/reveillon-na-paulista-tera-esquema-de-seguranca-especial-confira.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title: 'Governo central registra déficit de R$ 39 bilhões em novembro',
      image_url:
        'https://jpimg.com.br/uploads/2023/11/ballots-1195005_1280-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/economia/governo-central-registra-deficit-de-r-39-bilhoes-em-novembro.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title:
        'TJSP determina que Booking indenize clientes por hospedagem cancelada',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/imagem-aerea-de-ubatuba-3-scaled-770x578-1-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/brasil/tjsp-determina-que-booking-indenize-clientes-por-hospedagem-cancelada.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title:
        'Milhares de pessoas protestam na Argentina contra ‘megadecreto’ de Milei: ‘Respeite a divisão de poderes’',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/manifestacao-na-argentina-300x170.jpg',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/milhares-de-pessoas-protestam-na-argentina-contra-megadecreto-de-milei-respeite-a-divisao-de-poderes.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  },
  {
    news: {
      type: 'JPan',
      title:
        'Policiais militares são afastados após dispararem projétil de airsoft e atingirem criança de 1 ano',
      image_url: 'https://jpimg.com.br/uploads/2023/12/pm-moto-300x170.png',
      delay: 20,
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/brasil/policiais-militares-sao-afastados-apos-dispararem-projetil-de-airsoft-e-atingirem-crianca-de-1-ano.html'
    },
    weather: {
      city_name: 'Campo Grande',
      sunrise: '05:59 am',
      sunset: '07:20 pm',
      temp: 32,
      description: 'Parcialmente nublado',
      condition_slug: 'cloudly_day',
      forecast: [
        {
          date: '27/12',
          weekday: 'Qua',
          max: 35,
          min: 21,
          cloudiness: 67,
          rain: 0,
          rain_probability: 12,
          wind_speedy: '3.05 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '28/12',
          weekday: 'Qui',
          max: 38,
          min: 23,
          cloudiness: 17,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.66 km/h',
          description: 'Parcialmente nublado',
          condition: 'cloudly_day'
        },
        {
          date: '29/12',
          weekday: 'Sex',
          max: 39,
          min: 27,
          cloudiness: 87,
          rain: 0,
          rain_probability: 6,
          wind_speedy: '7.28 km/h',
          description: 'Tempo nublado',
          condition: 'cloudly_day'
        },
        {
          date: '30/12',
          weekday: 'Sáb',
          max: 34,
          min: 22,
          cloudiness: 100,
          rain: 4.45,
          rain_probability: 91,
          wind_speedy: '6.12 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '31/12',
          weekday: 'Dom',
          max: 34,
          min: 21,
          cloudiness: 100,
          rain: 9.72,
          rain_probability: 100,
          wind_speedy: '6.81 km/h',
          description: 'Chuva',
          condition: 'rain'
        },
        {
          date: '01/01',
          weekday: 'Seg',
          max: 27,
          min: 21,
          cloudiness: 100,
          rain: 7.08,
          rain_probability: 100,
          wind_speedy: '2.98 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '02/01',
          weekday: 'Ter',
          max: 28,
          min: 21,
          cloudiness: 84,
          rain: 3.1,
          rain_probability: 69,
          wind_speedy: '4.85 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '03/01',
          weekday: 'Qua',
          max: 34,
          min: 21,
          cloudiness: 9,
          rain: 0,
          rain_probability: 0,
          wind_speedy: '4.83 km/h',
          description: 'Tempo limpo',
          condition: 'clear_day'
        },
        {
          date: '04/01',
          weekday: 'Qui',
          max: 36,
          min: 22,
          cloudiness: 70,
          rain: 0.11,
          rain_probability: 28,
          wind_speedy: '3.15 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        },
        {
          date: '05/01',
          weekday: 'Sex',
          max: 37,
          min: 23,
          cloudiness: 100,
          rain: 0.26,
          rain_probability: 36,
          wind_speedy: '3.04 km/h',
          description: 'Chuvas esparsas',
          condition: 'rain'
        }
      ]
    }
  }
]
export default async (): Promise<Commercial[]> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(commercialMock)
    }, 3000)
  })
}
