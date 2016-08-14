(function() {
  'use strict';

  Media.defineData('groups',[{
      name: 'Fish',
      thumb: 'fish.jpeg',
      photos: ['0711ffaf', '0f50d172', '570f3ef5', '88414ba1', 'bbc16dc0'],
      audio: ['fish-119819', 'fish-133793', 'fish-92737', 'fish-92737', 'fish-119819']
    }, {
      name: 'Duck',
      thumb: 'duck.jpeg',
      photos: ['c1428835', '10800cb3', '108a5a11', '87f08674', 'd4e64eb8'],
      audio: ['duck-187261', 'duck-80733', 'duck-90091', 'duck-187261', 'duck-90091']
    }, {
      name: 'Mouse',
      thumb: 'mouse.jpeg',
      photos: ['0f3612a5', '6250898c', 'a1ea98ea', 'f8e9174c'],
      audio: ['mouse-188043', 'mouse-188043', 'mouse-188043', 'mouse-188043']
    }, {
      name: 'Rabbit',
      thumb: 'rabbit.jpeg',
      photos: ['53f2ba10', '7401a65b', '8c2877e2'],
      audio: ['rabbit-84141', 'rabbit-84141-2', 'rabbit-84141']
    }, {
      name: 'Cat',
      thumb: 'cat.jpeg',
      photos: ['2764a345', '4c9b77af', '618bde43', '718295cc', '957bf153', 'dffb3ef2'],
      audio: ['cat-110011', 'cat-51809', 'cat-26104', 'cat-26104-2', 'cat-39990', 'cat-51809']
    }, {
      name: 'Dog',
      thumb: 'dog.jpeg',
      photos: ['112ff448', '3500a63f', '737ffec2', '7fd6ff27', '97b7076a', 'b72238be', 'e872e5c8', 'fcda8e49'], 
      audio: ['dog-157322', 'dog-24965', 'dog-72579', 'dog-9032', 'dog-72579', 'dog-24965', 'dog-24965', 'dog-157322']
    }, {
      name: 'Guinea Pig',
      thumb: 'gp.jpeg',
      photos: ['881edb04', '0306a893', 'a4503482'],
      audio: ['gp-101957', 'gp-101957', 'gp-101957']
    }, {
      name: 'Horse',
      thumb: 'horse.jpeg',
      photos: ['4f0f79e9', '726103f7', '776efb7c'],
      audio: ['horse-149024', 'horse-32044', 'horse-32044', 'horse-18229']
    }, {
      name: 'Cow',
      thumb: 'cow.jpeg',
      photos: ['4ef90f6e', '6210fe92', '638e6252', '6d075b04'],
      audio: ['cow-163727', 'cow-126358', 'cow-163727', 'cow-84697', 'cow-117795']
    }, {
      name: 'Pig',
      thumb: 'pig.jpeg',
      photos: ['23787bdc', '5002f36a', 'd471df1b', 'e4809072', '1a29ef23'],
      audio: ['pig-103418', 'pig-103419', 'pig-103421', 'pig-103421', 'pig-103419']
    }, {
      name: 'Sheep',
      thumb: 'sheep.jpeg',
      photos: ['ba2a4649', 'dab6bebe', 'f53a5166'],
      audio: ['sheep-75190', 'sheep-103441', 'sheep-103442', 'sheep-75190']
    }, {
      name: 'Llama',
      thumb: 'llama.jpeg',
      photos: ['428f7ec4', '4bd30e2a', '75a42ac1'],
      audio: ['llama-75190', 'llama-75190-2', 'llama-75190-3']
    }]
  );

  Media.defineData('ui', {
      'background': {
        'author': 'Jordan Alexander Hartley',
        'title': 'Low Wray Farm Panorama',
        'file': 'backgrounds/farm.jpeg',
        'link': 'http://www.flickr.com/photos/25283204@N08/8732958622/'
      },
  });
  
  Media.defineData('audio', {  
    'ambient-177966': {
      'author': 'jaap.sijben@gmail.com',
      'file': 'ambient-177966.mp3',
      'link': 'http://www.freesound.org/people/jaap.sijben@gmail.com/sounds/177966/'
      },
    'llama-75190' : {
        'author' : 'HerbertBoland',
        'file' : 'llama-75190.mp3',
        'link' : 'http://www.freesound.org/people/HerbertBoland/sounds/75190/'
      },
    'llama-75190-2' : {
        'author' : 'HerbertBoland',
        'file' : 'llama-75190-2.mp3',
        'link' : 'http://www.freesound.org/people/HerbertBoland/sounds/75190/'
      },
    'llama-75190-3' : {
        'author' : 'HerbertBoland',
        'file' : 'llama-75190-3.mp3',
        'link' : 'http://www.freesound.org/people/HerbertBoland/sounds/75190/'
      },
  
    'cat-110011' : {
        'author' : 'tuberatanka',
        'file' : 'cat-110011.mp3',
        'link' : 'http://www.freesound.org/people/tuberatanka/sounds/110011/'
      },
    'cat-51809' : {
        'author' : 'kyles',
        'file' : 'cat-51809.mp3',
        'link' : 'http://www.freesound.org/people/kyles/sounds/51809/'
      },
    'cat-26104' : {
        'author' : 'ignotus',
        'file' : 'cat-26104.mp3',
        'link' : 'http://www.freesound.org/people/ignotus/sounds/26104/'
      },
    'cat-26104-2' : {
        'author' : 'ignotus',
        'file' : 'cat-26104.mp3',
        'link' : 'http://www.freesound.org/people/ignotus/sounds/26104/'
      },
    'cat-39990' : {
        'author' : 'Fishdog',
        'file' : 'cat-39990.mp3',
        'link' : 'http://www.freesound.org/people/Fishdog/sounds/39990/'
      },
    'cow-117795' : {
        'author' : 'fexlix.blume',
        'file' : 'cow-117795.mp3',
        'link' : 'http://www.freesound.org/people/felix.blume/sounds/117795/'
      },
    'cow-126358' : {
        'author' : 'tdes',
        'file' : 'cow-126358.mp3',
        'link' : 'http://www.freesound.org/people/tdes/sounds/126358/'
      },
    'cow-163727' : {
        'author' : 'felix.blume',
        'file' : 'cow-163727.mp3',
        'link' : 'http://www.freesound.org/people/felix.blume/sounds/163727/'
      },
    'cow-84697' : {
        'author' : 'cmusounddesign',
        'file' : 'cow-84697.mp3',
        'link' : 'http://www.freesound.org/people/cmusounddesign/sounds/84697/'
      },
    'dog-157322' : {
        'author' : 'Anton',
        'file' : 'dog-157322.mp3',
        'link' : 'http://www.freesound.org/people/Anton/sounds/157322/'
      },
    'dog-24965' : {
        'author' : 'mich3d',
        'file' : 'dog-24965.mp3',
        'link' : 'http://www.freesound.org/people/mich3d/sounds/24965/'
      },
    'dog-55005' : {
        'author' : 'manda_g',
        'file' : 'dog-55005.mp3',
        'link' : 'http://www.freesound.org/people/manda_g/sounds/55005/'
      },
    'dog-72579' : {
        'author' : 'moffet',
        'file' : 'dog-72579.mp3',
        'link' : 'http://www.freesound.org/people/moffet/sounds/72579/'
      },
    'dog-9032' : {
        'author' : 'MisterToodx',
        'file' : 'dog-9032.mp3',
        'link' : 'http://www.freesound.org/people/MisterTood/sounds/9032/'
      },
    'duck-187261' : {
        'author' : 'Jonnyhoff91',
        'file' : 'duck-187261.mp3',
        'link' : 'http://www.freesound.org/people/Jonnyhoff91/sounds/187261/'
      },
    'duck-80733' : {
        'author' : 'Sailor55',
        'file' : 'duck-80733.mp3',
        'link' : 'http://www.freesound.org/people/Sailor55/sounds/80733/'
      },
    'duck-90091' : {
        'author' : 'Justin.Mckinsey',
        'file' : 'duck-90091.mp3',
        'link' : 'http://www.freesound.org/people/Justin.Mckinsey/sounds/90091/'
      },
    'fish-119819' : {
        'author' : 'cmusounddesign',
        'file' : 'fish-119819.mp3',
        'link' : 'http://www.freesound.org/people/cmusounddesign/sounds/119819/'
      },
    'fish-133793' : {
        'author' : 'Julien Nicolas',
        'file' : 'fish-133793.mp3',
        'link' : 'http://www.freesound.org/people/Julien%20Nicolas/sounds/133793/'
      },
    'fish-172512' : {
        'author' : 'Mings',
        'file' : 'fish-172512.mp3',
        'link' : 'http://www.freesound.org/people/Mings/sounds/172512/'
      },
    'fish-92737' : {
        'author' : 'm_O_m',
        'file' : 'fish-92737.mp3',
        'link' : 'http://www.freesound.org/people/m_O_m/sounds/92737/'
      },
    'gp-101957' : {
        'author' : 'J - Luc',
        'file' : 'gp-101957.mp3',
        'link' : 'http://www.freesound.org/people/J%20-%20Luc/sounds/101957/'
      },
    'horse-149024' : {
        'author' : 'foxen10',
        'file' : 'horse-149024.mp3',
        'link' : 'http://www.freesound.org/people/foxen10/sounds/149024/'
      },
    'horse-18229' : {
        'author' : 'dobroide',
        'file' : 'horse-18229.mp3',
        'link' : 'http://www.freesound.org/people/dobroide/sounds/18229/'
      },
    'horse-32044' : {
        'author' : 'ERH',
        'file' : 'horse-32044.mp3',
        'link' : 'http://www.freesound.org/people/ERH/sounds/32044/'
      },
    'horse-32679' : {
        'author' : 'prosounder',
        'file' : 'horse-32679.mp3',
        'link' : 'http://www.freesound.org/people/prosounder/sounds/32679/'
      },
    'mouse-154381' : {
        'author' : 'semccab',
        'file' : 'mouse-154381.mp3',
        'link' : 'http://www.freesound.org/people/semccab/sounds/154381/'
      },
    'mouse-188043' : {
        'author' : 'AntumDeluge',
        'file' : 'mouse-188043.mp3',
        'link' : 'http://www.freesound.org/people/AntumDeluge/sounds/188043/'
      },
    'pig-103418' : {
        'author' : 'confusion_music',
        'file' : 'pig-103418.mp3',
        'link' : 'http://www.freesound.org/people/confusion_music/sounds/103418/'
      },
    'pig-103419' : {
        'author' : 'confusion_music',
        'file' : 'pig-103419.mp3',
        'link' : 'http://www.freesound.org/people/confusion_music/sounds/103419/'
      },
    'pig-103421' : {
        'author' : 'confusion_music',
        'file' : 'pig-103421.mp3',
        'link' : 'http://www.freesound.org/people/confusion_music/sounds/103421/'
      },
    'sheep-103440' : {
        'author' : 'confusion_music',
        'file' : 'sheep-103440.mp3',
        'link' : 'http://www.freesound.org/people/confusion_music/sounds/103440/'
      },
    'sheep-103441' : {
        'author' : 'confusion_music',
        'file' : 'sheep-103441.mp3',
        'link' : 'http://www.freesound.org/people/confusion_music/sounds/103441/'
      },
    'sheep-103442' : {
        'author' : 'confusion_music',
        'file' : 'sheep-103442.mp3',
        'link' : 'http://www.freesound.org/people/confusion_music/sounds/103442/'
      },
    'sheep-75190' : {
        'author' : 'HerbertBoland',
        'file' : 'sheep-75190.mp3',
        'link' : 'http://www.freesound.org/people/HerbertBoland/sounds/75190/'
      },
    'rabbit-84141' : {
        'author' : 'dobroide',
        'file' : 'rabbit-84141.mp3',
        'link' : 'http://www.freesound.org/people/dobroide/sounds/84141/'
      },
    'rabbit-84141-2' : {
        'author' : 'dobroide',
        'file' : 'rabbit-84141-2.mp3',
        'link' : 'http://www.freesound.org/people/dobroide/sounds/84141/'
      }
  });
  
  Media.defineData('photos', { 
    '0711ffaf' : {
        'author' : 'Nagashima',
        'file' : '0711ffaf.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/73598922@N00/203905743/',
        'title' : 'Goldfish'
      },
    '0f3612a5' : {
        'author' : 'Mark Bray',
        'file' : '0f3612a5.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/braydawg/185092747/',
        'title' : 'Mouse'
      },
    '0f50d172' : {
        'author' : 'Lee Haywood',
        'file' : '0f50d172.jpeg',
        'license' : '5',
        'link' : 'http://www.flickr.com/photos/leehaywood/4322790001/',
        'title' : 'Goldfish and friends'
      },
    '10800cb3' : {
        'author' : 'Juan Pons',
        'file' : '10800cb3.jpeg',
        'license' : '0',
        'link' : 'http://www.flickr.com/photos/jpons/481432129/',
        'title' : 'Wood Duckling'
      },
    '108a5a11' : {
        'author' : 'Frank Vassen',
        'file' : '108a5a11.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/42244964@N03/6826537248/',
        'title' : 'Male Wood Duck'
      },
    '112ff448' : {
        'author' : 'Grace Smith',
        'file' : '112ff448.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/gracesmith/3716891886/',
        'title' : 'Mr St. Bernard'
      },
    '23787bdc' : {
        'author' : 'J. Marsh',
        'file' : '23787bdc.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/75894308@N03/7220192480/',
        'title' : 'Pigs'
      },
    '2764a345' : {
        'author' : 'Roberto Shabs',
        'file' : '2764a345.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/37287295@N00/2540855181/',
        'title' : 'Bengal cat'
      },
    '3500a63f' : {
        'author' : 'Josh',
        'file' : '3500a63f.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/joshme17/1557627176/',
        'title' : 'My dog being bored'
      },
    '4c9b77af' : {
        'author' : 'Bruno Cordioli',
        'file' : '4c9b77af.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/br1dotcom/4375600759/',
        'title' : 'Cats in Milano'
      },
    '4ef90f6e' : {
        'author' : 'Andrew Horne',
        'file' : '4ef90f6e.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/70832171@N07/7743984702/',
        'title' : 'Highland Cow'
      },
    '4f0f79e9' : {
        'author' : 'Wolfgang Staudt',
        'file' : '4f0f79e9.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/wolfgangstaudt/2434405362/',
        'title' : 'Camargue horse'
      },
    '5002f36a' : {
        'author' : 'Bob Haarmans',
        'file' : '5002f36a.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/rhaarmans/7583784354/',
        'title' : 'Cooling Off'
      },
    '53f2ba10' : {
        'author' : 'Dulup',
        'file' : '53f2ba10.jpeg',
        'license' : '5',
        'link' : 'http://www.flickr.com/photos/duloup/927367604/',
        'title' : 'Rabbit / Lapin'
      },
    '570f3ef5' : {
        'author' : 'protographer23',
        'file' : '570f3ef5.jpeg',
        'license' : '5',
        'link' : 'http://www.flickr.com/photos/protographer23/250593029/',
        'title' : 'Goldfish'
      },
    '618bde43' : {
        'author' : 'zaimoku_woodpile',
        'file' : '618bde43.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/11250735@N07/8560841233/',
        'title' : 'Cats in the Spring'
      },
    '6210fe92' : {
        'author' : 'Neil D\'Cruze',
        'file' : '6210fe92.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/neil_dcruze/3855882819/',
        'title' : 'Icelandic Cow'
      },
    '6250898c' : {
        'author' : 'Kim Carpenter',
        'file' : '6250898c.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/kim_carpenter_nj/4101387491/',
        'title' : 'Clive'
      },
    '638e6252' : {
        'author' : 'David B. Gleason',
        'file' : '638e6252.jpeg',
        'license' : '5',
        'link' : 'http://www.flickr.com/photos/mindfrieze/8183766228/',
        'title' : 'Cow'
      },
    '6d075b04' : {
        'author' : 'David Davies',
        'file' : '6d075b04.jpeg',
        'license' : '5',
        'link' : 'http://www.flickr.com/photos/davies/7669822022/',
        'title' : 'Conversing with cows'
      },
    '718295cc' : {
        'author' : 'wenliang chen',
        'file' : '718295cc.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/kneva/560380352/',
        'title' : 'Cat'
      },
    '726103f7' : {
        'author' : 'Wolfgang Staudt',
        'file' : '726103f7.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/wolfgangstaudt/2439653824/',
        'title' : 'Le Camargue'
      },
    '737ffec2' : {
        'author' : 'Tambako The Jaguar',
        'file' : '737ffec2.jpeg',
        'license' : '6',
        'link' : 'http://www.flickr.com/photos/tambako/821161211/',
        'title' : 'Dog portrait'
      },
    '7401a65b' : {
        'author' : 'Daniel Hall',
        'file' : '7401a65b.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/pictographic/4706834161/',
        'title' : 'Rabbits \'n Stuff'
      },
    '776efb7c' : {
        'author' : 'Denis Egan',
        'file' : '776efb7c.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/theancientbrit/459752438/',
        'title' : ''
      },
    '7fd6ff27' : {
        'author' : 'John Talbot',
        'file' : '7fd6ff27.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/laserstars/3086132328/',
        'title' : 'Ella the Snow Dog'
      },
    '87f08674' : {
        'author' : 'Frank Vassen',
        'file' : '87f08674.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/42244964@N03/6973269405/',
        'title' : 'Male Wood Duck'
      },
    '881edb04' : {
        'author' : 'photon_de',
        'file' : '881edb04.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/photon_de/2864103965/',
        'title' : 'Guinea Pigs'
      },
     '0306a893' : {
        'author' : 'Phil Whitehouse',
        'file' : '0306a893.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/philliecasablanca/2051853059/',
        'title' : 'Guinea Pig Farm'
      },
     'a4503482' : {
        'author' : 'Michael James',
        'file' : 'a4503482.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/mjjames/2767818856/',
        'title' : 'Guinea Pigs'
      },
    '88414ba1' : {
        'author' : 'Elma',
        'file' : '88414ba1.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/24710622@N05/3229595963/',
        'title' : 'Goldfish'
      },
    '8c2877e2' : {
        'author' : 'Daniel Hall',
        'file' : '8c2877e2.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/pictographic/4706862491/',
        'title' : 'Rabbits n Stuff'
      },
    '957bf153' : {
        'author' : 'anaa yoo',
        'file' : '957bf153.jpeg',
        'license' : '6',
        'link' : 'http://www.flickr.com/photos/54844390@N05/5110833180/',
        'title' : 'Cat'
      },
    '97b7076a' : {
        'author' : 'aubree clark',
        'file' : '97b7076a.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/aubreecaraline/515115458/',
        'title' : 'Bernese Mountain Dog'
      },
    'a1ea98ea' : {
        'author' : 'Neil McIntosh',
        'file' : 'a1ea98ea.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/harlequeen/5752256334/',
        'title' : 'Harvest Mouse'
      },
    'b72238be' : {
        'author' : 'Sally Wehner',
        'file' : 'b72238be.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/9258photo/5752779245/',
        'title' : ''
      },
    'bbc16dc0' : {
        'author' : 'Katie Brady',
        'file' : 'bbc16dc0.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/cliche/3908722382/',
        'title' : 'Goldfish'
      },
    'c1428835' : {
        'author' : 'Olga Oslina',
        'file' : 'c1428835.jpeg',
        'license' : '0',
        'link' : 'http://www.flickr.com/photos/olga_oslina/5786996537/',
        'title' : 'A duck on the lake'
      },
    'd4e64eb8' : {
        'author' : 'Frank Vassen',
        'file' : 'd4e64eb8.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/42244964@N03/6985514625/',
        'title' : 'Wood Duck'
      },
    'dffb3ef2' : {
        'author' : 'anaa yoo',
        'file' : 'dffb3ef2.jpeg',
        'license' : '6',
        'link' : 'http://www.flickr.com/photos/54844390@N05/5110834170/',
        'title' : 'Cat'
      },
    'e872e5c8' : {
        'author' : 'Maja Dumat',
        'file' : 'e872e5c8.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/blumenbiene/6843168738/',
        'title' : 'Bullmastiff Lotte'
      },
    'f8e9174c' : {
        'author': 'Giang Hồ Thị Hoàng',
        'file' : 'f8e9174c.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/hthg1983/2237614948/',
        'title' : 'Happy Lunar New Year of The Mouse'
      },
    'fcda8e49' : {
        'author' : 'Nic Adler',
        'file' : 'fcda8e49.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/whoshotya/1014730135/',
        'title' : 'Boxer Dogs'
      },
      
      
    '1b1e6d8b' : {
      'author' : 'Andrew Horne',
      'file' : '1b1e6d8b.jpeg',
      'license' : '4',
      'link' : 'http://www.flickr.com/photos/70832171@N07/8783330781/',
      'title' : 'Poitou Donkey'
    },
    '428f7ec4' : {
        'author' : 'Trisha Shears',
        'file' : '428f7ec4.jpeg',
        'license' : '5',
        'link' : 'http://www.flickr.com/photos/19598613@N00/516925917/',
        'title' : 'Guanaco'
      },
    '4bd30e2a' : {
        'author' : 'Luc Viatour',
        'file' : '4bd30e2a.jpeg',
        'license' : '5',
        'link' : 'http://www.flickr.com/photos/luc_viatour/3784334656/',
        'title' : 'Lama'
      },
    '75a42ac1' : {
        'author' : 'flickrfavorites',
        'file' : '75a42ac1.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/38485387@N02/3570278232/',
        'title' : 'Lama'
      },
    'ba2a4649' : {
        'author' : 'David Wright',
        'file' : 'ba2a4649.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/dhwright/3822550597/',
        'title' : 'Hebridean Sheep'
      },
    'dab6bebe' : {
        'author' : 'Dean Wiles',
        'file' : 'dab6bebe.jpeg',
        'license' : '5',
        'link' : 'http://www.flickr.com/photos/hundredline/6072820892/',
        'title' : 'Suckers'
      },
    'f53a5166' : {
        'author' : 'Richard Baer',
        'file' : 'f53a5166.jpeg',
        'license' : '5',
        'link' : 'http://www.flickr.com/photos/boonerator/2701665039/',
        'title' : 'Sheep'
      },
    'd471df1b' : {
        'author' : 'woodleywonderworks',
        'file' : 'd471df1b.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/wwworks/2971831776/',
        'title' : 'Grateful'
      },
    'e4809072' : {
        'author' : 'Sean',
        'file' : 'e4809072.jpeg',
        'license' : '6',
        'link' : 'http://www.flickr.com/photos/22280677@N07/2793140301/',
        'title' : 'Pigs'
      },
     '1a29ef23' : {
        'author' : 'Mark Peters',
        'file' : '1a29ef23.jpeg',
        'license' : '4',
        'link' : 'http://www.flickr.com/photos/sneakerdog/3988150541/',
        'title' : 'Poplar Spring Animal Sanctuary'
      }
    });
})();