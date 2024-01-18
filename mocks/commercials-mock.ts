import { CommercialPaginationResponse } from '@/models/commercials'

export const commercialMock = {
  results: {
    totalPages: 17,
    currentPage: 1,
    next: {
      page: 2,
      limit: 5
    },
    data: [
      {
        id: '3df92c3b-e5b0-42d7-bbcc-1f7aa5d0f8bc',
        newsId:
          'noticias-brasil-problemas-no-acesso-ao-site-do-inep-dificultam-consulta-dos-resultados-do-enem-2023',
        weatherId: '455947',
        createdAt: '2024-01-16T22:11:22.948Z',
        news: {
          id: 'noticias-brasil-problemas-no-acesso-ao-site-do-inep-dificultam-consulta-dos-resultados-do-enem-2023',
          type: 'JPan',
          title:
            'Problemas de acesso ao site do Inep dificultam consulta dos resultados do Enem 2023',
          image_url: 'https://jpimg.com.br/uploads/2021/11/inep-300x170.jpg',
          qrcode:
            'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/brasil/problemas-no-acesso-ao-site-do-inep-dificultam-consulta-dos-resultados-do-enem-2023.html',
          delay: 20,
          createdAt: '2024-01-16T22:11:22.948Z'
        },
        weather: {
          id: '455947',
          temp: '34º C',
          description: 'Parcialmente nublado',
          sunrise: '06:25 am',
          sunset: '07:34 pm',
          condition_slug:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloud.svg',
          city_name: 'Corumbá',
          created_at: '2023-12-29T22:55:30.661Z',
          forecast: [
            {
              id: '8bea9cda-a630-4ca1-be18-2d1493471392',
              index: 1,
              date: 'Ter - 16/01',
              weekday: 'Ter',
              max: 'Máxima de 38º C',
              min: 'Mínima de 24º C',
              description: 'Tempo limpo',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/clear_day.svg',
              created_at: '2023-12-29T22:55:30.661Z',
              weatherId: '455947'
            },
            {
              id: '95791284-7fa4-4d9f-91a1-8582f35f4b59',
              index: 2,
              date: 'Qua - 17/01',
              weekday: 'Qua',
              max: 'Máxima de 39º C',
              min: 'Mínima de 25º C',
              description: 'Chuvas esparsas',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
              created_at: '2023-12-29T22:55:30.661Z',
              weatherId: '455947'
            },
            {
              id: '8817a899-9f4c-4e2a-bdff-5a3d451edbef',
              index: 3,
              date: 'Qui - 18/01',
              weekday: 'Qui',
              max: 'Máxima de 40º C',
              min: 'Mínima de 23º C',
              description: 'Chuvas esparsas',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
              created_at: '2023-12-29T22:55:30.661Z',
              weatherId: '455947'
            },
            {
              id: 'f41573dc-cfd5-4233-92cd-207c98b2b1a8',
              index: 0,
              date: 'Seg - 15/01',
              weekday: 'Seg',
              max: 'Máxima de 37º C',
              min: 'Mínima de 23º C',
              description: 'Chuvas esparsas',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
              created_at: '2023-12-29T22:55:30.661Z',
              weatherId: '455947'
            }
          ]
        }
      },
      {
        id: '8f6ce469-5210-477c-86ab-80b3f8dea707',
        newsId:
          'noticias-mundo-israel-diz-que-fase-intensiva-dos-combates-em-gaza-terminara-em-breve',
        weatherId: '26804347',
        createdAt: '2024-01-16T22:11:22.934Z',
        news: {
          id: 'noticias-mundo-israel-diz-que-fase-intensiva-dos-combates-em-gaza-terminara-em-breve',
          type: 'JPan',
          title:
            'Israel diz que fase intensiva dos combates em Gaza terminará ‘em breve’',
          image_url:
            'https://jpimg.com.br/uploads/2024/01/israel-em-gaza-300x170.jpg',
          qrcode:
            'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/israel-diz-que-fase-intensiva-dos-combates-em-gaza-terminara-em-breve.html',
          delay: 20,
          createdAt: '2024-01-16T22:11:22.934Z'
        },
        weather: {
          id: '26804347',
          temp: '31º C',
          description: 'Parcialmente nublado',
          sunrise: '06:11 am',
          sunset: '07:24 pm',
          condition_slug:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloud.svg',
          city_name: 'Campo Grande',
          created_at: '2023-12-29T22:48:30.931Z',
          forecast: [
            {
              id: 'e2a203d2-7c96-4dd5-aef6-c54c9f8d0573',
              index: 0,
              date: 'Seg - 15/01',
              weekday: 'Seg',
              max: 'Máxima de 32º C',
              min: 'Mínima de 22º C',
              description: 'Chuvas esparsas',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
              created_at: '2023-12-29T22:48:30.931Z',
              weatherId: '26804347'
            },
            {
              id: '31f9bf56-a768-4451-a607-8b8ae745782d',
              index: 2,
              date: 'Qua - 17/01',
              weekday: 'Qua',
              max: 'Máxima de 34º C',
              min: 'Mínima de 24º C',
              description: 'Parcialmente nublado',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
              created_at: '2023-12-29T22:48:30.931Z',
              weatherId: '26804347'
            },
            {
              id: '1ab5472c-a286-4ae5-84fe-0600c64f0e83',
              index: 3,
              date: 'Qui - 18/01',
              weekday: 'Qui',
              max: 'Máxima de 37º C',
              min: 'Mínima de 24º C',
              description: 'Tempo limpo',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/clear_day.svg',
              created_at: '2023-12-29T22:48:30.931Z',
              weatherId: '26804347'
            },
            {
              id: '51a2aba7-1acb-4536-b463-425b9096b92c',
              index: 1,
              date: 'Ter - 16/01',
              weekday: 'Ter',
              max: 'Máxima de 34º C',
              min: 'Mínima de 22º C',
              description: 'Tempo nublado',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
              created_at: '2023-12-29T22:48:30.931Z',
              weatherId: '26804347'
            }
          ]
        }
      },
      {
        id: 'b8f6e999-01ec-45ba-8b3a-676f2068791f',
        newsId:
          'noticias-mundo-deslocados-em-gaza-vivem-em-tendas-improvisadas-e-lutam-contra-o-frio-queimando-plasticos',
        weatherId: '455827',
        createdAt: '2024-01-16T22:11:22.918Z',
        news: {
          id: 'noticias-mundo-deslocados-em-gaza-vivem-em-tendas-improvisadas-e-lutam-contra-o-frio-queimando-plasticos',
          type: 'JPan',
          title:
            'Deslocados em Gaza vivem em tendas improvisadas e lutam contra o frio queimando plásticos',
          image_url:
            'https://jpimg.com.br/uploads/2024/01/tendas-em-gaza-300x170.jpg',
          qrcode:
            'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/deslocados-em-gaza-vivem-em-tendas-improvisadas-e-lutam-contra-o-frio-queimando-plasticos.html',
          delay: 20,
          createdAt: '2024-01-16T22:11:22.918Z'
        },
        weather: {
          id: '455827',
          temp: '30º C',
          description: 'Parcialmente nublado',
          sunrise: '05:33 am',
          sunset: '06:58 pm',
          condition_slug:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloud.svg',
          city_name: 'São Paulo',
          created_at: '2023-12-29T22:55:30.738Z',
          forecast: [
            {
              id: 'fa5fc6e6-17f1-43ac-ad22-b3794f899794',
              index: 1,
              date: 'Qua - 17/01',
              weekday: 'Qua',
              max: 'Máxima de 33º C',
              min: 'Mínima de 23º C',
              description: 'Chuvas esparsas',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
              created_at: '2023-12-29T22:55:30.738Z',
              weatherId: '455827'
            },
            {
              id: '6ff14d34-e005-4429-9f02-7bd14c437788',
              index: 0,
              date: 'Ter - 16/01',
              weekday: 'Ter',
              max: 'Máxima de 33º C',
              min: 'Mínima de 21º C',
              description: 'Parcialmente nublado',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
              created_at: '2023-12-29T22:55:30.738Z',
              weatherId: '455827'
            },
            {
              id: '725f3174-2d8a-40b3-8659-395636a2be20',
              index: 2,
              date: 'Qui - 18/01',
              weekday: 'Qui',
              max: 'Máxima de 34º C',
              min: 'Mínima de 22º C',
              description: 'Chuvas esparsas',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
              created_at: '2023-12-29T22:55:30.738Z',
              weatherId: '455827'
            },
            {
              id: 'b124a361-65cd-426c-bb60-c13475ec7f29',
              index: 3,
              date: 'Sex - 19/01',
              weekday: 'Sex',
              max: 'Máxima de 31º C',
              min: 'Mínima de 23º C',
              description: 'Chuvas esparsas',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
              created_at: '2023-12-29T22:55:30.738Z',
              weatherId: '455827'
            }
          ]
        }
      },
      {
        id: '3402791a-3e1d-45ce-b6fa-16e23044c3a0',
        newsId:
          'noticias-mundo-avioes-se-chocam-em-solo-durante-nevasca-no-aeroporto-do-japao',
        weatherId: '457088',
        createdAt: '2024-01-16T22:11:22.902Z',
        news: {
          id: 'noticias-mundo-avioes-se-chocam-em-solo-durante-nevasca-no-aeroporto-do-japao',
          type: 'JPan',
          title:
            'Aviões se chocam em solo durante nevasca no aeroporto do Japão',
          image_url:
            'https://jpimg.com.br/uploads/2024/01/fotografia-14-300x170.png',
          qrcode:
            'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/mundo/avioes-se-chocam-em-solo-durante-nevasca-no-aeroporto-do-japao.html',
          delay: 20,
          createdAt: '2024-01-16T22:11:22.902Z'
        },
        weather: {
          id: '457088',
          temp: '32º C',
          description: 'Tempo nublado',
          sunrise: '06:15 am',
          sunset: '07:21 pm',
          condition_slug:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          city_name: 'Coxim',
          created_at: '2023-12-29T22:55:30.720Z',
          forecast: [
            {
              id: '041389ab-ef07-4e92-b4bb-8e5324ff7fc2',
              index: 2,
              date: 'Qua - 17/01',
              weekday: 'Qua',
              max: 'Máxima de 36º C',
              min: 'Mínima de 24º C',
              description: 'Chuvas esparsas',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
              created_at: '2023-12-29T22:55:30.720Z',
              weatherId: '457088'
            },
            {
              id: 'b19adfad-4d02-4296-89fe-16fca399e504',
              index: 3,
              date: 'Qui - 18/01',
              weekday: 'Qui',
              max: 'Máxima de 38º C',
              min: 'Mínima de 25º C',
              description: 'Parcialmente nublado',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/cloud.svg',
              created_at: '2023-12-29T22:55:30.720Z',
              weatherId: '457088'
            },
            {
              id: 'cbe39cff-83b0-404c-b159-c6fef86427a6',
              index: 1,
              date: 'Ter - 16/01',
              weekday: 'Ter',
              max: 'Máxima de 36º C',
              min: 'Mínima de 22º C',
              description: 'Parcialmente nublado',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/cloud.svg',
              created_at: '2023-12-29T22:55:30.720Z',
              weatherId: '457088'
            },
            {
              id: '7cea74a6-e4b4-4a7c-98d0-c034c069cdd9',
              index: 0,
              date: 'Seg - 15/01',
              weekday: 'Seg',
              max: 'Máxima de 30º C',
              min: 'Mínima de 22º C',
              description: 'Chuvas esparsas',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
              created_at: '2023-12-29T22:55:30.720Z',
              weatherId: '457088'
            }
          ]
        }
      },
      {
        id: '9ecb52de-7af0-4490-a834-8e9c9a073189',
        newsId:
          'noticias-brasil-patricia-lelis-e-procurada-pelo-fbi-por-fraude-milionaria-nos-eua',
        weatherId: '456335',
        createdAt: '2024-01-16T22:11:22.888Z',
        news: {
          id: 'noticias-brasil-patricia-lelis-e-procurada-pelo-fbi-por-fraude-milionaria-nos-eua',
          type: 'JPan',
          title:
            'Patricia Lélis é procurada pelo FBI por fraude milionária nos EUA',
          image_url:
            'https://jpimg.com.br/uploads/2024/01/patricia-lelis-300x170.jpg',
          qrcode:
            'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://jovempan.com.br/noticias/brasil/patricia-lelis-e-procurada-pelo-fbi-por-fraude-milionaria-nos-eua.html',
          delay: 20,
          createdAt: '2024-01-16T22:11:22.888Z'
        },
        weather: {
          id: '456335',
          temp: '34º C',
          description: 'Tempo nublado',
          sunrise: '06:18 am',
          sunset: '07:31 pm',
          condition_slug:
            'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
          city_name: 'Miranda',
          created_at: '2023-12-29T22:55:30.702Z',
          forecast: [
            {
              id: '7ce656d5-947a-41c6-a486-3d77c7ff3419',
              index: 2,
              date: 'Qua - 17/01',
              weekday: 'Qua',
              max: 'Máxima de 40º C',
              min: 'Mínima de 25º C',
              description: 'Chuvas esparsas',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
              created_at: '2023-12-29T22:55:30.702Z',
              weatherId: '456335'
            },
            {
              id: 'cd8de699-417d-40eb-9cf8-fcbc8716f350',
              index: 3,
              date: 'Qui - 18/01',
              weekday: 'Qui',
              max: 'Máxima de 41º C',
              min: 'Mínima de 24º C',
              description: 'Tempo limpo',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/clear_day.svg',
              created_at: '2023-12-29T22:55:30.702Z',
              weatherId: '456335'
            },
            {
              id: '49d74e09-9d1d-4577-ba37-55b16d791ee4',
              index: 0,
              date: 'Seg - 15/01',
              weekday: 'Seg',
              max: 'Máxima de 36º C',
              min: 'Mínima de 23º C',
              description: 'Chuvas esparsas',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/rain.svg',
              created_at: '2023-12-29T22:55:30.702Z',
              weatherId: '456335'
            },
            {
              id: '46173e5f-682d-499e-8a1b-833ad420f132',
              index: 1,
              date: 'Ter - 16/01',
              weekday: 'Ter',
              max: 'Máxima de 39º C',
              min: 'Mínima de 24º C',
              description: 'Tempo nublado',
              condition:
                'https://assets.hgbrasil.com/weather/icons/conditions/cloudly_day.svg',
              created_at: '2023-12-29T22:55:30.702Z',
              weatherId: '456335'
            }
          ]
        }
      }
    ]
  }
}

export default async (): Promise<CommercialPaginationResponse> => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(commercialMock.results)
    }, 1000)
  })
}
