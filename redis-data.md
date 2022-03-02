# Redis data

**Copy/Pasta the following lines into redis cli to add the data into redis**

```bash
FLUSHALL

hmset locality:city:6799e06a name "Enghien" region "Ile-de-France" code 95880
hmset locality:city:5288ffcf name "Annecy" region "Auvergne-Rhône-Alpes" code 74010
hmset locality:city:33c18f9c name "Paris" region "Ile-de-France" code 75005
hmset locality:city:43132877 name "Bordeaux" region "Nouvelle-Aquitaine" code 33063
hmset locality:city:3609eb90 name "Arcachon" region "Nouvelle-Aquitaine" code 33009
hmset locality:city:0e7d4e12 name "Perpignan" region "Occitanie" code 66136
hmset locality:city:cc187e35 name "Narbonne" region "Occitanie" code 11262
hmset locality:city:1ed14d25 name "Lyon" region "Auvergne-Rhône-Alpes" code 69123
hmset locality:city:16cebdb4 name "Strasbourg" region "Grand-Est" code 67482

GEOADD locality:geo 48.96917084600656 2.304791862411735 6799e06a
GEOADD locality:geo 45.90074655290088 6.1262710165450205 5288ffcf
GEOADD locality:geo 48.839143662686084 2.3458052099410422 33c18f9c
GEOADD locality:geo 44.85227421084634 -0.5851541855251572 43132877
GEOADD locality:geo 44.65097553427607 -1.182906989114003 3609eb90
GEOADD locality:geo 42.693094837695185 2.889576354602873 0e7d4e12
GEOADD locality:geo 43.17786156599892 3.0045049596366367 cc187e35
GEOADD locality:geo 45.76117895654417 4.85521404387267 1ed14d25
GEOADD locality:geo 48.57132493773823 7.773750612183592 16cebdb4
```
