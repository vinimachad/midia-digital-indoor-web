import { Commercial } from '@/models/commercials'

export const commercialMock = [
  // {
  //   news: {
  //     id: 'https://jovempan.com.br/noticias/brasil/possibilidade-de-temporais-na-ultima-sexta-feira-do-ano-deixam-rio-grande-do-sul-e-santa-catarina-em-alerta.html',
  //     type: 'JPan',
  //     title:
  //       'Possibilidade de temporais na última sexta-feira do ano deixam Rio Grande do Sul e Santa Catarina em alerta',
  //     image_url:
  //       'https://jpimg.com.br/uploads/2023/12/fup20231128121-300x170.jpg',
  //     qrcode:
  //       'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/brasil/possibilidade-de-temporais-na-ultima-sexta-feira-do-ano-deixam-rio-grande-do-sul-e-santa-catarina-em-alerta.html',
  //     delay: 20,
  //     created_at: '2023-12-29T01:26:53.766Z'
  //   }
  // },
  {
    weather: {
      id: '455947',
      temp: '27º C',
      description: 'Tempo nublado',
      sunrise: '06:14 am',
      sunset: '07:30 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
      city_name: 'Corumbá',
      created_at: '2023-12-29T10:36:05.029Z',
      forecast: [
        {
          id: 'f2e6ecd0-6245-42c8-8aef-f062d903c28e',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 41º C',
          min: 'Mínima de 24º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        },
        {
          id: '4e911f06-0009-4122-a3d7-044c90ea8b92',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 44º C',
          min: 'Mínima de 26º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        },
        {
          id: '5acd6d4f-0e2c-4dd9-8e36-b90939884e4e',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 40º C',
          min: 'Mínima de 22º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        },
        {
          id: 'c7f2dfaf-8857-4e22-82c4-ab69b8af2ea6',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 34º C',
          min: 'Mínima de 22º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/mundo/maine-bloqueia-candidatura-de-trump-nas-primarias-para-eleicoes-de-2024.html',
      type: 'JPan',
      title:
        'Estado de Maine bloqueia candidatura de Trump nas primárias para eleições de 2024',
      image_url:
        'https://jpimg.com.br/uploads/2023/11/donald-trump-1-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/maine-bloqueia-candidatura-de-trump-nas-primarias-para-eleicoes-de-2024.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.840Z'
    }
  },
  {
    weather: {
      id: '455947',
      temp: '27º C',
      description: 'Tempo nublado',
      sunrise: '06:14 am',
      sunset: '07:30 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
      city_name: 'Corumbá',
      created_at: '2023-12-29T10:36:05.029Z',
      forecast: [
        {
          id: 'f2e6ecd0-6245-42c8-8aef-f062d903c28e',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 41º C',
          min: 'Mínima de 24º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        },
        {
          id: '4e911f06-0009-4122-a3d7-044c90ea8b92',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 44º C',
          min: 'Mínima de 26º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        },
        {
          id: '5acd6d4f-0e2c-4dd9-8e36-b90939884e4e',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 40º C',
          min: 'Mínima de 22º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        },
        {
          id: 'c7f2dfaf-8857-4e22-82c4-ab69b8af2ea6',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 34º C',
          min: 'Mínima de 22º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/politica/partidos-apresentam-acao-no-stf-para-fazer-valer-decisao-do-congresso-sobre-o-marco-temporal.html',
      type: 'JPan',
      title:
        'Partidos apresentam ação no STF para fazer valer decisão do Congresso sobre o marco temporal',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/53217133282_370125ac33_k-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/politica/partidos-apresentam-acao-no-stf-para-fazer-valer-decisao-do-congresso-sobre-o-marco-temporal.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.847Z'
    }
  },
  {
    weather: {
      id: '456043',
      temp: '28º C',
      description: 'Tempo nublado',
      sunrise: '06:04 am',
      sunset: '07:25 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
      city_name: 'Aquidauana',
      created_at: '2023-12-29T10:36:05.064Z',
      forecast: [
        {
          id: '5fd8b512-2a94-4473-9241-c361f9e5f9ec',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 41º C',
          min: 'Mínima de 25º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.064Z',
          weatherId: '456043'
        },
        {
          id: '94e415ec-bb24-4f11-aa6f-8b954f1c4003',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 43º C',
          min: 'Mínima de 26º C',
          description: 'Parcialmente nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloud.svg',
          created_at: '2023-12-29T10:36:05.064Z',
          weatherId: '456043'
        },
        {
          id: '0b03cf43-7bf1-4c3f-8b58-bb10fb4e4c73',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 39º C',
          min: 'Mínima de 23º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.064Z',
          weatherId: '456043'
        },
        {
          id: 'f46bd725-8090-4dbd-9e0b-ebb82364f410',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 36º C',
          min: 'Mínima de 23º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.064Z',
          weatherId: '456043'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/mundo/central-sindical-da-argentina-convoca-greve-geral-contra-megadecreto-de-milei.html',
      type: 'JPan',
      title:
        'Central sindical da Argentina convoca greve geral contra ‘megadecreto’ de Milei',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/dnu-argentina-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/central-sindical-da-argentina-convoca-greve-geral-contra-megadecreto-de-milei.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.854Z'
    }
  },
  {
    weather: {
      id: '456335',
      temp: '26º C',
      description: 'Tempo nublado',
      sunrise: '06:06 am',
      sunset: '07:27 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
      city_name: 'Miranda',
      created_at: '2023-12-29T10:36:05.084Z',
      forecast: [
        {
          id: '657d13ed-4a74-4025-9910-2ed9b9048de9',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 41º C',
          min: 'Mínima de 24º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.084Z',
          weatherId: '456335'
        },
        {
          id: '96638b69-9627-4228-9b34-7ae731fce87a',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 43º C',
          min: 'Mínima de 26º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.084Z',
          weatherId: '456335'
        },
        {
          id: 'f7cc5263-47cc-46e3-90ec-e07c533b3fa8',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 39º C',
          min: 'Mínima de 23º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.084Z',
          weatherId: '456335'
        },
        {
          id: 'c90229fc-e4e7-4292-a595-628a026f2b21',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 36º C',
          min: 'Mínima de 23º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.084Z',
          weatherId: '456335'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/economia/ibovespa-encerra-melhor-ano-desde-2019-com-leve-ajuste-negativo-no-ultimo-pregao.html',
      type: 'JPan',
      title:
        'Ibovespa encerra melhor ano desde 2019 com leve ajuste negativo no último pregão',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/ato20231228094-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/economia/ibovespa-encerra-melhor-ano-desde-2019-com-leve-ajuste-negativo-no-ultimo-pregao.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.862Z'
    }
  },
  {
    weather: {
      id: '457088',
      temp: '28º C',
      description: 'Parcialmente nublado',
      sunrise: '06:03 am',
      sunset: '07:17 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloud.svg',
      city_name: 'Coxim',
      created_at: '2023-12-29T10:36:05.102Z',
      forecast: [
        {
          id: 'c206ae93-cb78-47f0-9386-0485b4ef1729',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 40º C',
          min: 'Mínima de 25º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.102Z',
          weatherId: '457088'
        },
        {
          id: 'cf31fd15-c358-4745-b4e9-e63067404a5c',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 40º C',
          min: 'Mínima de 27º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.102Z',
          weatherId: '457088'
        },
        {
          id: '64d37d51-679c-4ffe-9389-83f077fb147a',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 40º C',
          min: 'Mínima de 24º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.102Z',
          weatherId: '457088'
        },
        {
          id: '9ba1d2f2-0386-4119-82af-dd03450dccf9',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 35º C',
          min: 'Mínima de 24º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.102Z',
          weatherId: '457088'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/economia/congresso-diz-que-pacote-de-haddad-que-acaba-com-desoneracao-vai-sofrer-resistencia-desde-a-largada.html',
      type: 'JPan',
      title:
        'Congresso reage mal a pacote de Haddad que acaba com desoneração: ‘Vai sofrer resistência desde a largada’',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/age20231220064-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/economia/congresso-diz-que-pacote-de-haddad-que-acaba-com-desoneracao-vai-sofrer-resistencia-desde-a-largada.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.869Z'
    }
  },
  {
    weather: {
      id: '455827',
      temp: '21º C',
      description: 'Tempo limpo',
      sunrise: '05:21 am',
      sunset: '06:55 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/clear_day.svg',
      city_name: 'São Paulo',
      created_at: '2023-12-29T10:36:05.122Z',
      forecast: [
        {
          id: 'cc2aa8f5-63ea-444d-aa47-36e867454749',
          index: 0,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 36º C',
          min: 'Mínima de 19º C',
          description: 'Parcialmente nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloud.svg',
          created_at: '2023-12-29T10:36:05.122Z',
          weatherId: '455827'
        },
        {
          id: '7990754e-e34a-40d7-adbb-0cb68ba5a2d0',
          index: 1,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 27º C',
          min: 'Mínima de 18º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.122Z',
          weatherId: '455827'
        },
        {
          id: '4339fe37-0bf3-447b-9be1-3f48433ed32c',
          index: 2,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 22º C',
          min: 'Mínima de 18º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.122Z',
          weatherId: '455827'
        },
        {
          id: '97697134-0b5d-4e1e-945d-877592dfdad0',
          index: 3,
          date: 'Seg - 01/01',
          weekday: 'Seg',
          max: 'Máxima de 21º C',
          min: 'Mínima de 18º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.122Z',
          weatherId: '455827'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/mundo/venezuela-inicia-acao-defensiva-apos-reino-unido-enviar-navio-militar-para-guiana.html',
      type: 'JPan',
      title:
        'Venezuela inicia ação defensiva após Reino Unido enviar navio militar para Guiana',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/venezuela-e-guiana-1-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/venezuela-inicia-acao-defensiva-apos-reino-unido-enviar-navio-militar-para-guiana.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.876Z'
    }
  },
  {
    weather: {
      id: '26804347',
      temp: '26º C',
      description: 'Tempo nublado',
      sunrise: '05:59 am',
      sunset: '07:21 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
      city_name: 'Campo Grande',
      created_at: '2023-12-29T02:03:21.700Z',
      forecast: [
        {
          id: '9c474cc8-3e5c-4834-afc3-ad740b9500ca',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 38º C',
          min: 'Mínima de 23º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:04.987Z',
          weatherId: '26804347'
        },
        {
          id: 'becfe202-a748-41f1-8119-44e4967060c0',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 38º C',
          min: 'Mínima de 26º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:04.987Z',
          weatherId: '26804347'
        },
        {
          id: '168e9b2a-733b-4903-aa3d-5c79029f09a1',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 35º C',
          min: 'Mínima de 22º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:04.987Z',
          weatherId: '26804347'
        },
        {
          id: '3572e545-9738-4a47-a21e-c928e6d29fc7',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 34º C',
          min: 'Mínima de 21º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:04.987Z',
          weatherId: '26804347'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/mundo/superpoderes-reforma-eleitoral-e-autorizacao-para-reuniao-em-publico-entenda-a-lei-onibus-de-milei.html',
      type: 'JPan',
      title:
        'Superpoderes, reforma eleitoral e autorização para reunião em público: entenda a Lei Ônibus de Milei',
      image_url:
        'https://jpimg.com.br/uploads/2023/10/javier-milei-2-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/superpoderes-reforma-eleitoral-e-autorizacao-para-reuniao-em-publico-entenda-a-lei-onibus-de-milei.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.883Z'
    }
  },
  {
    weather: {
      id: '455947',
      temp: '27º C',
      description: 'Tempo nublado',
      sunrise: '06:14 am',
      sunset: '07:30 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
      city_name: 'Corumbá',
      created_at: '2023-12-29T10:36:05.029Z',
      forecast: [
        {
          id: 'f2e6ecd0-6245-42c8-8aef-f062d903c28e',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 41º C',
          min: 'Mínima de 24º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        },
        {
          id: '4e911f06-0009-4122-a3d7-044c90ea8b92',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 44º C',
          min: 'Mínima de 26º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        },
        {
          id: '5acd6d4f-0e2c-4dd9-8e36-b90939884e4e',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 40º C',
          min: 'Mínima de 22º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        },
        {
          id: 'c7f2dfaf-8857-4e22-82c4-ab69b8af2ea6',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 34º C',
          min: 'Mínima de 22º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/economia/brasil-registra-criacao-de-130-mil-novas-vagas-de-emprego-em-novembro.html',
      type: 'JPan',
      title:
        'Brasil registra criação de 130 mil novas vagas de emprego em novembro',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/work-card-7461817_1280-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/economia/brasil-registra-criacao-de-130-mil-novas-vagas-de-emprego-em-novembro.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.890Z'
    }
  },
  {
    weather: {
      id: '456043',
      temp: '28º C',
      description: 'Tempo nublado',
      sunrise: '06:04 am',
      sunset: '07:25 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
      city_name: 'Aquidauana',
      created_at: '2023-12-29T10:36:05.064Z',
      forecast: [
        {
          id: '5fd8b512-2a94-4473-9241-c361f9e5f9ec',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 41º C',
          min: 'Mínima de 25º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.064Z',
          weatherId: '456043'
        },
        {
          id: '94e415ec-bb24-4f11-aa6f-8b954f1c4003',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 43º C',
          min: 'Mínima de 26º C',
          description: 'Parcialmente nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloud.svg',
          created_at: '2023-12-29T10:36:05.064Z',
          weatherId: '456043'
        },
        {
          id: '0b03cf43-7bf1-4c3f-8b58-bb10fb4e4c73',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 39º C',
          min: 'Mínima de 23º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.064Z',
          weatherId: '456043'
        },
        {
          id: 'f46bd725-8090-4dbd-9e0b-ebb82364f410',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 36º C',
          min: 'Mínima de 23º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.064Z',
          weatherId: '456043'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/brasil/ibama-retoma-emissao-de-licencas-para-caca-e-manejo-de-javalis.html',
      type: 'JPan',
      title: 'Ibama retoma emissão de licenças para caça e manejo de javalis',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/animal-6543231_1280-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/brasil/ibama-retoma-emissao-de-licencas-para-caca-e-manejo-de-javalis.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.897Z'
    }
  },
  {
    weather: {
      id: '456335',
      temp: '26º C',
      description: 'Tempo nublado',
      sunrise: '06:06 am',
      sunset: '07:27 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
      city_name: 'Miranda',
      created_at: '2023-12-29T10:36:05.084Z',
      forecast: [
        {
          id: '657d13ed-4a74-4025-9910-2ed9b9048de9',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 41º C',
          min: 'Mínima de 24º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.084Z',
          weatherId: '456335'
        },
        {
          id: '96638b69-9627-4228-9b34-7ae731fce87a',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 43º C',
          min: 'Mínima de 26º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.084Z',
          weatherId: '456335'
        },
        {
          id: 'f7cc5263-47cc-46e3-90ec-e07c533b3fa8',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 39º C',
          min: 'Mínima de 23º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.084Z',
          weatherId: '456335'
        },
        {
          id: 'c90229fc-e4e7-4292-a595-628a026f2b21',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 36º C',
          min: 'Mínima de 23º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.084Z',
          weatherId: '456335'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/brasil/sao-paulo-rio-de-janeiro-e-salvador-definem-as-datas-para-o-carnaval-do-ano-que-vem.html',
      type: 'JPan',
      title:
        'São Paulo, Rio de Janeiro e Salvador definem as datas para o Carnaval do ano que vem',
      image_url:
        'https://jpimg.com.br/uploads/2020/09/fup20230217674-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/brasil/sao-paulo-rio-de-janeiro-e-salvador-definem-as-datas-para-o-carnaval-do-ano-que-vem.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.904Z'
    }
  },
  {
    weather: {
      id: '457088',
      temp: '28º C',
      description: 'Parcialmente nublado',
      sunrise: '06:03 am',
      sunset: '07:17 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloud.svg',
      city_name: 'Coxim',
      created_at: '2023-12-29T10:36:05.102Z',
      forecast: [
        {
          id: 'c206ae93-cb78-47f0-9386-0485b4ef1729',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 40º C',
          min: 'Mínima de 25º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.102Z',
          weatherId: '457088'
        },
        {
          id: 'cf31fd15-c358-4745-b4e9-e63067404a5c',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 40º C',
          min: 'Mínima de 27º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.102Z',
          weatherId: '457088'
        },
        {
          id: '64d37d51-679c-4ffe-9389-83f077fb147a',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 40º C',
          min: 'Mínima de 24º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.102Z',
          weatherId: '457088'
        },
        {
          id: '9ba1d2f2-0386-4119-82af-dd03450dccf9',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 35º C',
          min: 'Mínima de 24º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.102Z',
          weatherId: '457088'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/politica/impasse-sobre-vices-em-sp-e-favoritismo-de-paes-no-rio-marcam-disputa-pelas-prefeituras-a-menos-de-um-ano-do-pleito.html',
      type: 'JPan',
      title:
        'Impasse sobre vices em SP e favoritismo de Paes no Rio marcam disputa pelas prefeituras a menos de um ano do pleito',
      image_url:
        'https://jpimg.com.br/uploads/2022/09/asp20220926004-1-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/politica/impasse-sobre-vices-em-sp-e-favoritismo-de-paes-no-rio-marcam-disputa-pelas-prefeituras-a-menos-de-um-ano-do-pleito.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.911Z'
    }
  },
  {
    weather: {
      id: '455827',
      temp: '21º C',
      description: 'Tempo limpo',
      sunrise: '05:21 am',
      sunset: '06:55 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/clear_day.svg',
      city_name: 'São Paulo',
      created_at: '2023-12-29T10:36:05.122Z',
      forecast: [
        {
          id: 'cc2aa8f5-63ea-444d-aa47-36e867454749',
          index: 0,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 36º C',
          min: 'Mínima de 19º C',
          description: 'Parcialmente nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloud.svg',
          created_at: '2023-12-29T10:36:05.122Z',
          weatherId: '455827'
        },
        {
          id: '7990754e-e34a-40d7-adbb-0cb68ba5a2d0',
          index: 1,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 27º C',
          min: 'Mínima de 18º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.122Z',
          weatherId: '455827'
        },
        {
          id: '4339fe37-0bf3-447b-9be1-3f48433ed32c',
          index: 2,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 22º C',
          min: 'Mínima de 18º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.122Z',
          weatherId: '455827'
        },
        {
          id: '97697134-0b5d-4e1e-945d-877592dfdad0',
          index: 3,
          date: 'Seg - 01/01',
          weekday: 'Seg',
          max: 'Máxima de 21º C',
          min: 'Mínima de 18º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.122Z',
          weatherId: '455827'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/brasil/homem-e-preso-por-enviar-drogas-pelos-correios.html',
      type: 'JPan',
      title: 'Homem é preso por enviar drogas pelos Correios',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/policia-federal-300x170.jpeg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/brasil/homem-e-preso-por-enviar-drogas-pelos-correios.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.917Z'
    }
  },
  {
    weather: {
      id: '26804347',
      temp: '26º C',
      description: 'Tempo nublado',
      sunrise: '05:59 am',
      sunset: '07:21 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
      city_name: 'Campo Grande',
      created_at: '2023-12-29T02:03:21.700Z',
      forecast: [
        {
          id: '9c474cc8-3e5c-4834-afc3-ad740b9500ca',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 38º C',
          min: 'Mínima de 23º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:04.987Z',
          weatherId: '26804347'
        },
        {
          id: 'becfe202-a748-41f1-8119-44e4967060c0',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 38º C',
          min: 'Mínima de 26º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:04.987Z',
          weatherId: '26804347'
        },
        {
          id: '168e9b2a-733b-4903-aa3d-5c79029f09a1',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 35º C',
          min: 'Mínima de 22º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:04.987Z',
          weatherId: '26804347'
        },
        {
          id: '3572e545-9738-4a47-a21e-c928e6d29fc7',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 34º C',
          min: 'Mínima de 21º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:04.987Z',
          weatherId: '26804347'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/mundo/gypsy-rose-blanchard-e-libertada-de-prisao-nos-eua-apos-matar-a-mae-por-invencao-de-doencas.html',
      type: 'JPan',
      title:
        'Gypsy Rose Blanchard é libertada de prisão nos EUA após matar a mãe por invenção de doenças',
      image_url: 'https://jpimg.com.br/uploads/2023/12/gypsy-rose-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/gypsy-rose-blanchard-e-libertada-de-prisao-nos-eua-apos-matar-a-mae-por-invencao-de-doencas.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.925Z'
    }
  },
  {
    weather: {
      id: '455947',
      temp: '27º C',
      description: 'Tempo nublado',
      sunrise: '06:14 am',
      sunset: '07:30 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
      city_name: 'Corumbá',
      created_at: '2023-12-29T10:36:05.029Z',
      forecast: [
        {
          id: 'f2e6ecd0-6245-42c8-8aef-f062d903c28e',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 41º C',
          min: 'Mínima de 24º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        },
        {
          id: '4e911f06-0009-4122-a3d7-044c90ea8b92',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 44º C',
          min: 'Mínima de 26º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        },
        {
          id: '5acd6d4f-0e2c-4dd9-8e36-b90939884e4e',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 40º C',
          min: 'Mínima de 22º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        },
        {
          id: 'c7f2dfaf-8857-4e22-82c4-ab69b8af2ea6',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 34º C',
          min: 'Mínima de 22º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/politica/relembre-as-cinco-decisoes-do-stf-que-mais-impactaram-o-pais-em-2023.html',
      type: 'JPan',
      title:
        'Relembre as cinco decisões do STF que mais impactaram o país em 2023',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/53204395558_8ab30e5434_k-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/politica/relembre-as-cinco-decisoes-do-stf-que-mais-impactaram-o-pais-em-2023.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.931Z'
    }
  },
  {
    weather: {
      id: '456043',
      temp: '28º C',
      description: 'Tempo nublado',
      sunrise: '06:04 am',
      sunset: '07:25 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
      city_name: 'Aquidauana',
      created_at: '2023-12-29T10:36:05.064Z',
      forecast: [
        {
          id: '5fd8b512-2a94-4473-9241-c361f9e5f9ec',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 41º C',
          min: 'Mínima de 25º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.064Z',
          weatherId: '456043'
        },
        {
          id: '94e415ec-bb24-4f11-aa6f-8b954f1c4003',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 43º C',
          min: 'Mínima de 26º C',
          description: 'Parcialmente nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloud.svg',
          created_at: '2023-12-29T10:36:05.064Z',
          weatherId: '456043'
        },
        {
          id: '0b03cf43-7bf1-4c3f-8b58-bb10fb4e4c73',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 39º C',
          min: 'Mínima de 23º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.064Z',
          weatherId: '456043'
        },
        {
          id: 'f46bd725-8090-4dbd-9e0b-ebb82364f410',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 36º C',
          min: 'Mínima de 23º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.064Z',
          weatherId: '456043'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/economia/previa-da-inflacao-de-2023-fecha-com-alta-de-472.html',
      type: 'JPan',
      title: 'Prévia da inflação de 2023 fecha com alta de 4,72%',
      image_url:
        'https://jpimg.com.br/uploads/2023/05/manager-man-checking-finance-working-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/economia/previa-da-inflacao-de-2023-fecha-com-alta-de-472.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.939Z'
    }
  },
  {
    weather: {
      id: '456335',
      temp: '26º C',
      description: 'Tempo nublado',
      sunrise: '06:06 am',
      sunset: '07:27 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
      city_name: 'Miranda',
      created_at: '2023-12-29T10:36:05.084Z',
      forecast: [
        {
          id: '657d13ed-4a74-4025-9910-2ed9b9048de9',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 41º C',
          min: 'Mínima de 24º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.084Z',
          weatherId: '456335'
        },
        {
          id: '96638b69-9627-4228-9b34-7ae731fce87a',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 43º C',
          min: 'Mínima de 26º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.084Z',
          weatherId: '456335'
        },
        {
          id: 'f7cc5263-47cc-46e3-90ec-e07c533b3fa8',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 39º C',
          min: 'Mínima de 23º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.084Z',
          weatherId: '456335'
        },
        {
          id: 'c90229fc-e4e7-4292-a595-628a026f2b21',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 36º C',
          min: 'Mínima de 23º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.084Z',
          weatherId: '456335'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/economia/haddad-anuncia-proposta-de-reoneracao-gradual-da-folha-de-pagamento.html',
      type: 'JPan',
      title:
        'Haddad anuncia proposta de reoneração gradual da folha de pagamento',
      image_url:
        'https://jpimg.com.br/uploads/2023/07/53060053314_3226ba1e40_k-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/economia/haddad-anuncia-proposta-de-reoneracao-gradual-da-folha-de-pagamento.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.949Z'
    }
  },
  {
    weather: {
      id: '457088',
      temp: '28º C',
      description: 'Parcialmente nublado',
      sunrise: '06:03 am',
      sunset: '07:17 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloud.svg',
      city_name: 'Coxim',
      created_at: '2023-12-29T10:36:05.102Z',
      forecast: [
        {
          id: 'c206ae93-cb78-47f0-9386-0485b4ef1729',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 40º C',
          min: 'Mínima de 25º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.102Z',
          weatherId: '457088'
        },
        {
          id: 'cf31fd15-c358-4745-b4e9-e63067404a5c',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 40º C',
          min: 'Mínima de 27º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.102Z',
          weatherId: '457088'
        },
        {
          id: '64d37d51-679c-4ffe-9389-83f077fb147a',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 40º C',
          min: 'Mínima de 24º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.102Z',
          weatherId: '457088'
        },
        {
          id: '9ba1d2f2-0386-4119-82af-dd03450dccf9',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 35º C',
          min: 'Mínima de 24º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.102Z',
          weatherId: '457088'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/economia/gerdau-goau4-e-mais-13-acoes-a-selecao-do-fundo-que-rendeu-150-do-ibovespa.html',
      type: 'JPan',
      title:
        'Gerdau (GOAU4) e mais 13 ações: a seleção do fundo que rendeu 150% do Ibovespa',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/stock-exchange-trading-forex-finance-graphic-concept-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/economia/gerdau-goau4-e-mais-13-acoes-a-selecao-do-fundo-que-rendeu-150-do-ibovespa.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.955Z'
    }
  },
  {
    weather: {
      id: '455827',
      temp: '21º C',
      description: 'Tempo limpo',
      sunrise: '05:21 am',
      sunset: '06:55 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/clear_day.svg',
      city_name: 'São Paulo',
      created_at: '2023-12-29T10:36:05.122Z',
      forecast: [
        {
          id: 'cc2aa8f5-63ea-444d-aa47-36e867454749',
          index: 0,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 36º C',
          min: 'Mínima de 19º C',
          description: 'Parcialmente nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloud.svg',
          created_at: '2023-12-29T10:36:05.122Z',
          weatherId: '455827'
        },
        {
          id: '7990754e-e34a-40d7-adbb-0cb68ba5a2d0',
          index: 1,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 27º C',
          min: 'Mínima de 18º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.122Z',
          weatherId: '455827'
        },
        {
          id: '4339fe37-0bf3-447b-9be1-3f48433ed32c',
          index: 2,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 22º C',
          min: 'Mínima de 18º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.122Z',
          weatherId: '455827'
        },
        {
          id: '97697134-0b5d-4e1e-945d-877592dfdad0',
          index: 3,
          date: 'Seg - 01/01',
          weekday: 'Seg',
          max: 'Máxima de 21º C',
          min: 'Mínima de 18º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.122Z',
          weatherId: '455827'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/mundo/eua-e-mexico-relatam-avancos-na-questao-migratoria-apos-visita-de-blinken.html',
      type: 'JPan',
      title:
        'EUA e México relatam avanços na questão migratória após visita de Blinken',
      image_url: 'https://jpimg.com.br/uploads/2023/12/000_34949bl-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/eua-e-mexico-relatam-avancos-na-questao-migratoria-apos-visita-de-blinken.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.963Z'
    }
  },
  {
    weather: {
      id: '26804347',
      temp: '26º C',
      description: 'Tempo nublado',
      sunrise: '05:59 am',
      sunset: '07:21 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
      city_name: 'Campo Grande',
      created_at: '2023-12-29T02:03:21.700Z',
      forecast: [
        {
          id: '9c474cc8-3e5c-4834-afc3-ad740b9500ca',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 38º C',
          min: 'Mínima de 23º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:04.987Z',
          weatherId: '26804347'
        },
        {
          id: 'becfe202-a748-41f1-8119-44e4967060c0',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 38º C',
          min: 'Mínima de 26º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:04.987Z',
          weatherId: '26804347'
        },
        {
          id: '168e9b2a-733b-4903-aa3d-5c79029f09a1',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 35º C',
          min: 'Mínima de 22º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:04.987Z',
          weatherId: '26804347'
        },
        {
          id: '3572e545-9738-4a47-a21e-c928e6d29fc7',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 34º C',
          min: 'Mínima de 21º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:04.987Z',
          weatherId: '26804347'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/mundo/lider-norte-coreano-quer-acelerar-preparativos-para-guerra.html',
      type: 'JPan',
      title: 'Líder norte-coreano quer ‘acelerar’ preparativos para guerra',
      image_url:
        'https://jpimg.com.br/uploads/2021/02/2021-02-12t223256z_1_lynxmpeh1b1ru_rtroptp_4_northkorea-politics-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/lider-norte-coreano-quer-acelerar-preparativos-para-guerra.html',
      delay: 20,
      created_at: '2023-12-29T01:26:53.969Z'
    }
  },
  {
    weather: {
      id: '455947',
      temp: '27º C',
      description: 'Tempo nublado',
      sunrise: '06:14 am',
      sunset: '07:30 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
      city_name: 'Corumbá',
      created_at: '2023-12-29T10:36:05.029Z',
      forecast: [
        {
          id: 'f2e6ecd0-6245-42c8-8aef-f062d903c28e',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 41º C',
          min: 'Mínima de 24º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        },
        {
          id: '4e911f06-0009-4122-a3d7-044c90ea8b92',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 44º C',
          min: 'Mínima de 26º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        },
        {
          id: '5acd6d4f-0e2c-4dd9-8e36-b90939884e4e',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 40º C',
          min: 'Mínima de 22º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        },
        {
          id: 'c7f2dfaf-8857-4e22-82c4-ab69b8af2ea6',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 34º C',
          min: 'Mínima de 22º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.029Z',
          weatherId: '455947'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/mundo/guiana-nega-planos-de-acao-ofensiva-contra-venezuela-nao-vamos-invadir.html',
      type: 'JPan',
      title:
        'Guiana nega ‘planos de ação ofensiva’ contra Venezuela: ‘Não vamos invadir’',
      image_url:
        'https://jpimg.com.br/uploads/2023/12/vice-presidente-da-guiana-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/guiana-nega-planos-de-acao-ofensiva-contra-venezuela-nao-vamos-invadir.html',
      delay: 20,
      created_at: '2023-12-29T02:03:21.657Z'
    }
  },
  {
    weather: {
      id: '456043',
      temp: '28º C',
      description: 'Tempo nublado',
      sunrise: '06:04 am',
      sunset: '07:25 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
      city_name: 'Aquidauana',
      created_at: '2023-12-29T10:36:05.064Z',
      forecast: [
        {
          id: '5fd8b512-2a94-4473-9241-c361f9e5f9ec',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 41º C',
          min: 'Mínima de 25º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.064Z',
          weatherId: '456043'
        },
        {
          id: '94e415ec-bb24-4f11-aa6f-8b954f1c4003',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 43º C',
          min: 'Mínima de 26º C',
          description: 'Parcialmente nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloud.svg',
          created_at: '2023-12-29T10:36:05.064Z',
          weatherId: '456043'
        },
        {
          id: '0b03cf43-7bf1-4c3f-8b58-bb10fb4e4c73',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 39º C',
          min: 'Mínima de 23º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.064Z',
          weatherId: '456043'
        },
        {
          id: 'f46bd725-8090-4dbd-9e0b-ebb82364f410',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 36º C',
          min: 'Mínima de 23º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.064Z',
          weatherId: '456043'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/brasil/empresa-brasileira-assina-carta-de-intencoes-para-fabricar-armas-na-arabia-saudita.html',
      type: 'JPan',
      title:
        'Empresa brasileira assina carta de intenções para fabricar armas na Arábia Saudita',
      image_url:
        'https://jpimg.com.br/uploads/2023/08/design-sem-nome-2023-08-29t164943.643-300x170.png',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/brasil/empresa-brasileira-assina-carta-de-intencoes-para-fabricar-armas-na-arabia-saudita.html',
      delay: 20,
      created_at: '2023-12-29T09:54:47.251Z'
    }
  },
  {
    weather: {
      id: '456335',
      temp: '26º C',
      description: 'Tempo nublado',
      sunrise: '06:06 am',
      sunset: '07:27 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
      city_name: 'Miranda',
      created_at: '2023-12-29T10:36:05.084Z',
      forecast: [
        {
          id: '657d13ed-4a74-4025-9910-2ed9b9048de9',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 41º C',
          min: 'Mínima de 24º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.084Z',
          weatherId: '456335'
        },
        {
          id: '96638b69-9627-4228-9b34-7ae731fce87a',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 43º C',
          min: 'Mínima de 26º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.084Z',
          weatherId: '456335'
        },
        {
          id: 'f7cc5263-47cc-46e3-90ec-e07c533b3fa8',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 39º C',
          min: 'Mínima de 23º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.084Z',
          weatherId: '456335'
        },
        {
          id: 'c90229fc-e4e7-4292-a595-628a026f2b21',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 36º C',
          min: 'Mínima de 23º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.084Z',
          weatherId: '456335'
        }
      ]
    }
  },
  {
    news: {
      id: 'https://jovempan.com.br/noticias/mundo/adolescente-de-15-anos-e-morto-por-tubarao-na-australia.html',
      type: 'JPan',
      title: 'Adolescente de 15 anos é morto por tubarão na Austrália ',
      image_url:
        'https://jpimg.com.br/uploads/2022/02/ataque-tubarao-autralia-300x170.jpg',
      qrcode:
        'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/adolescente-de-15-anos-e-morto-por-tubarao-na-australia.html',
      delay: 20,
      created_at: '2023-12-29T09:54:47.302Z'
    }
  },
  {
    weather: {
      id: '457088',
      temp: '28º C',
      description: 'Parcialmente nublado',
      sunrise: '06:03 am',
      sunset: '07:17 pm',
      condition_slug:
        'https://assets.hgbrasil.com/weather/icons/conditions/cloud.svg',
      city_name: 'Coxim',
      created_at: '2023-12-29T10:36:05.102Z',
      forecast: [
        {
          id: 'c206ae93-cb78-47f0-9386-0485b4ef1729',
          index: 0,
          date: 'Qui - 28/12',
          weekday: 'Qui',
          max: 'Máxima de 40º C',
          min: 'Mínima de 25º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.102Z',
          weatherId: '457088'
        },
        {
          id: 'cf31fd15-c358-4745-b4e9-e63067404a5c',
          index: 1,
          date: 'Sex - 29/12',
          weekday: 'Sex',
          max: 'Máxima de 40º C',
          min: 'Mínima de 27º C',
          description: 'Tempo nublado',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          created_at: '2023-12-29T10:36:05.102Z',
          weatherId: '457088'
        },
        {
          id: '64d37d51-679c-4ffe-9389-83f077fb147a',
          index: 2,
          date: 'Sáb - 30/12',
          weekday: 'Sáb',
          max: 'Máxima de 40º C',
          min: 'Mínima de 24º C',
          description: 'Chuvas esparsas',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.102Z',
          weatherId: '457088'
        },
        {
          id: '9ba1d2f2-0386-4119-82af-dd03450dccf9',
          index: 3,
          date: 'Dom - 31/12',
          weekday: 'Dom',
          max: 'Máxima de 35º C',
          min: 'Mínima de 24º C',
          description: 'Chuva',
          condition:
            'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
          created_at: '2023-12-29T10:36:05.102Z',
          weatherId: '457088'
        }
      ]
    }
  }
]

export default async (): Promise<Commercial[]> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(commercialMock)
    }, 1000)
  })
}
