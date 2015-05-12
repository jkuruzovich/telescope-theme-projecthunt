#Project Hunt Theme
This is the project hunt theme.

##Installation
To setup projecthunt, first clone the telescope repository: 
```
git clone https://github.com/TelescopeJS/Telescope.git
```

Then download telescope-theme-projecthunt and copy in the settings file using the following commands:

```
cd telescope/packages
git clone https://github.com/jkuruzovich/telescope-theme-projecthunt.git
cd ..
mkdir deploy
cp packages/telescope-theme-projecthunt/local.settings.json ./deploy
meteor add telescope-theme-projecthunt
```


##Launching Meteor Locally
Type the following:
```
meteor run --settings deploy/local.settings.json
```
