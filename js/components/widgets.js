import React from 'react';
import ClassNames from 'classnames';

import { Block, Btn,
         Card, CardHeader, CardContent, CardFooter, Chip,
         Divider,
         Icon, Image,
         List, ListItem,
         Progress,
         Text,
       } from 'react-essence';

var ChipStyle = {
  name: 'ChipStyle',
  text: [<span className={'e-text-black'}>style</span>],
  deletable: false,
}

var ChipFoodDrink = {
  name: 'ChipTravel',
  text: [<span className={'e-text-black'}>food & drink</span>],
  deletable: false,
}

var ChipTravel = {
  name: 'ChipTravel',
  text: [<span className={'e-text-black'}>travel</span>],
  deletable: false,
}

var ChipCarsMoto = {
  name: 'ChipTravel',
  text: [<span className={'e-text-black'}>cars & moto</span>],
  deletable: false,
}

var ChipCulture = {
  name: 'ChipTravel',
  text: [<span className={'e-text-black'}>culture</span>],
  deletable: false,
}

var ChipSport = {
  name: 'ChipTravel',
  text: [<span className={'e-text-black'}>sport</span>],
  deletable: false,
}

var ChipShoping = {
  name: 'ChipTravel',
  text: [<span className={'e-text-black'}>shoping</span>],
  deletable: false,
}

var ChipLife = {
  name: 'ChipTravel',
  text: [<span className={'e-text-black'}>life</span>],
  deletable: false,
}

var ChipFun = {
  name: 'ChipTravel',
  text: [<span className={'e-text-black'}>fun</span>],
  deletable: false,
}

var ChipVideo = {
  name: 'ChipTravel',
  text: [<span className={'e-text-black'}>video</span>],
  deletable: false,
}

var ChipGear = {
  name: 'ChipTravel',
  text: [<span className={'e-text-black'}>gear</span>],
  deletable: false,
}

var ChipGame = {
  name: 'ChipTravel',
  text: [<span className={'e-text-black'}>game</span>],
  deletable: false,
}

var ChipPhoto = {
  name: 'ChipTravel',
  text: [<span className={'e-text-black'}>photo</span>],
  deletable: false,
}

var ChipBranding = {
  name: 'ChipTravel',
  text: [<span className={'e-text-black'}>branding</span>],
  deletable: false,
}

var ChipArhitecture = {
  name: 'ChipTravel',
  text: [<span className={'e-text-black'}>arhitecture</span>],
  deletable: false,
}

var ChipBusiness = {
  name: 'ChipTravel',
  text: [<span className={'e-text-black'}>business</span>],
  deletable: false,
}

class SilkWidgets extends React.Component {

  render() {
    return (
      <Block className={'e-background-red-100'}>
        <Block classes={'silkWidgets e-container e-padding-top-25'}>
          <Text type={'h1'} classes={'e-text-center e-display-1 e-text-red-300'}> Widgets </Text>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-12'}>
              <Card classes={'e-background-white'}>
                <CardContent classes={'flex space-between'}>
                  <Block classes={'flex margin-r-15'}>
                    <Icon name={"hardware-keyboard-backspace"} className={"e-text-green-700 e-text-center show go-up"} />
                    <Block>
                      <Text type={'small'} classes={'e-text-left e-body1 e-text-grey-600 e-text-uppercase show'}> Nasdaq </Text>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> 1253.215 0.29% </Text>
                    </Block>
                  </Block>
                  <Block classes={'flex margin-r-15'}>
                    <Icon name={"hardware-keyboard-backspace"} className={"e-text-green-700 e-text-center show go-up"} />
                    <Block>
                      <Text type={'small'} classes={'e-text-left e-body1 e-text-grey-600 e-text-uppercase show'}> DJa </Text>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> 123.215 0.40% </Text>
                    </Block>
                  </Block>
                  <Block classes={'flex margin-r-15'}>
                    <Icon name={"hardware-keyboard-backspace"} className={"e-text-red-700 e-text-center show go-down"} />
                    <Block>
                      <Text type={'small'} classes={'e-text-left e-body1 e-text-grey-600 e-text-uppercase show'}> Crude Oil </Text>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> 53.215 -0.12% </Text>
                    </Block>
                  </Block>
                  <Block classes={'flex margin-r-15'}>
                    <Icon name={"hardware-keyboard-backspace"} className={"e-text-green-700 e-text-center show go-up"} />
                    <Block>
                      <Text type={'small'} classes={'e-text-left e-body1 e-text-grey-600 e-text-uppercase show'}> S&P 500 </Text>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> 2015.215 0.35% </Text>
                    </Block>
                  </Block>
                  <Block classes={'flex margin-r-15'}>
                    <Icon name={"hardware-keyboard-backspace"} className={"e-text-red-700 e-text-center show go-down"} />
                    <Block>
                      <Text type={'small'} classes={'e-text-left e-body1 e-text-grey-600 e-text-uppercase show'}> Euro </Text>
                      <Text type={'strong'} classes={'e-text-left e-subhead'}> 1.1102 -0.39% </Text>
                    </Block>
                  </Block>
                </CardContent>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h flex col-direction'}>
                <CardHeader className={'border-b'}>
                  <Text type={'strong'} classes={'e-text-left e-body2 e-no-margin e-text-black e-text-uppercase'}> tags </Text>
                </CardHeader>
                <CardContent>
                  <Chip data={ChipStyle} classes={'e-text-uppercase'}/>
                  <Chip data={ChipFoodDrink} classes={'e-text-uppercase'}/>
                  <Chip data={ChipTravel} classes={'e-text-uppercase'}/>
                  <Chip data={ChipCarsMoto} classes={'e-text-uppercase'}/>
                  <Chip data={ChipCulture} classes={'e-text-uppercase'}/>
                  <Chip data={ChipSport} classes={'e-text-uppercase'}/>
                  <Chip data={ChipShoping} classes={'e-text-uppercase'}/>
                  <Chip data={ChipLife} classes={'e-text-uppercase'}/>
                  <Chip data={ChipFun} classes={'e-text-uppercase'}/>
                  <Chip data={ChipVideo} classes={'e-text-uppercase'}/>
                  <Chip data={ChipGear} classes={'e-text-uppercase'}/>
                  <Chip data={ChipGame} classes={'e-text-uppercase'}/>
                  <Chip data={ChipPhoto} classes={'e-text-uppercase'}/>
                  <Chip data={ChipBranding} classes={'e-text-uppercase'}/>
                  <Chip data={ChipArhitecture} classes={'e-text-uppercase'}/>
                  <Chip data={ChipBusiness} classes={'e-text-uppercase'}/>
                </CardContent>
                <CardFooter classes={'e-background-grey-100 e-text-center grow'}>
                  <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-black e-text-uppercase v-align-tt'}> all tags </Text>
                </CardFooter>
              </Card>
            </Block>

            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h'}>
                <CardHeader classes={'border-b'}>
                  <Block classes={'flex space-between'}>
                    <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-black e-text-uppercase v-align-tt'}> instagram</Text>
                    <Btn label={'follow'} ripple={true} type={'default'} classes={'e-text-uppercase explore-btn'} />
                  </Block>
                </CardHeader>
                <CardContent>
                  <Block classes={'e-row'}>
                    <Block classes={'brick brick-4'}>
                      <Image src={'assets/img/balea.png'} height={'65px'} classes={'e-img-rsp full-w'}/>
                    </Block>
                    <Block classes={'brick brick-4'}>
                      <Image src={'assets/img/biserici.jpg'} height={'65px'} classes={'e-img-rsp full-w'}/>
                    </Block>
                    <Block classes={'brick brick-4'}>
                      <Image src={'assets/img/castel1.png'} height={'65px'} classes={'e-img-rsp full-w'}/>
                    </Block>
                    <Block classes={'brick brick-4'}>
                      <Image src={'assets/img/header-view.jpg'} height={'65px'} classes={'e-img-rsp full-w'}/>
                    </Block>
                    <Block classes={'brick brick-4'}>
                      <Image src={'assets/img/munte.jpg'} height={'65px'} classes={'e-img-rsp full-w'}/>
                    </Block>
                    <Block classes={'brick brick-4'}>
                      <Image src={'assets/img/peles.png'} height={'65px'} classes={'e-img-rsp full-w'}/>
                    </Block>
                    <Block classes={'brick brick-4'}>
                      <Image src={'assets/img/road.png'} height={'65px'} classes={'e-img-rsp full-w'}/>
                    </Block>
                    <Block classes={'brick brick-4'}>
                      <Image src={'assets/img/cetate.png'} height={'65px'} classes={'e-img-rsp full-w'}/>
                    </Block>
                    <Block classes={'brick brick-4'}>
                      <Image src={'assets/img/motor.jpg'} height={'65px'} classes={'e-img-rsp full-w'}/>
                    </Block>
                    <Block classes={'brick brick-4'}>
                      <Image src={'assets/img/romania4.png'} height={'65px'} classes={'e-img-rsp full-w'}/>
                    </Block>
                    <Block classes={'brick brick-4'}>
                      <Image src={'assets/img/romania2.png'} height={'65px'} classes={'e-img-rsp full-w'}/>
                    </Block>
                    <Block classes={'brick brick-4'}>
                      <Image src={'assets/img/romania3.png'} height={'65px'} classes={'e-img-rsp full-w'}/>
                    </Block>
                  </Block>
                </CardContent>
              </Card>
            </Block>

            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white flex col-direction card-h'}>
                <CardContent classes={'width-80 margin-auto flex col-direction grow'}>
                  <Block className={'e-text-center e-margin-bottom-15'}>
                    <Image src={'assets/img/profile.jpg'} height={'100px'} classes={'circle'} />
                  </Block>
                  <Block classes={'e-text-center'}>
                    <Text type={'strong'} classes={'e-text-center e-subhead'}>Johnny Brava </Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-600 e-subhead e-padding-bottom-15'}> Lorem ipsum dolor sit amet, dico reprehendunt vis cu. </Text>
                  </Block>
                  <Block classes={'e-text-center'}>
                    <Text type={'a'} classes={'e-text-center'}>
                      <i className={'fa fa-facebook e-text-indigo-600 padding-16'}></i>
                    </Text>
                    <Text type={'a'} classes={'e-text-center'}>
                      <i className={'fa fa-twitter e-text-light-blue-300 padding-16'}></i>
                    </Text>
                    <Text type={'a'} classes={'e-text-center e-text-red-400'}>
                      <i className={'fa fa-google-plus e-text-red-400 padding-16'}></i>
                    </Text>
                  </Block>
                </CardContent>
                <CardFooter classes={'e-background-grey-100 e-no-padding flex space-around'}>
                  <Block classes={'brick-4 padding-t-b'}>
                    <Text type={'strong'} classes={'e-text-center e-title e-text-grey-900 show'}> 15 </Text>
                    <Text type={'strong'} classes={'e-text-center e-body1 e-text-uppercase e-text-grey-600 show'}> posts </Text>
                  </Block>
                  <Block className={'brick-4 border-l-r padding-t-b'}>
                    <Text type={'strong'} classes={'e-text-center e-title e-text-grey-900 show'}> 622 </Text>
                    <Text type={'strong'} classes={'e-text-center e-body1 e-text-uppercase e-text-grey-600 show'}> followers </Text>
                  </Block>
                  <Block classes={'brick-4 padding-t-b'}>
                    <Text type={'strong'} classes={'e-text-center e-title e-text-grey-900 show'}> 214 </Text>
                    <Text type={'strong'} classes={'e-text-center e-body1 e-text-uppercase e-text-grey-600 show'}> follows </Text>
                  </Block>
                </CardFooter>
              </Card>
            </Block>

            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white flex col-direction card-h'}>
                <CardHeader classes={'e-no-padding'}>
                  <Image src={'assets/img/frunze.jpg'} height={'100px'} classes={'full-w'}/>
                </CardHeader>
                <CardContent classes={'width-80 margin-auto flex col-direction grow'}>
                  <Block className={'e-text-center e-margin-bottom-15'}>
                    <Image src={'assets/img/profile.jpg'} height={'100px'} classes={'circle border-circle margin-t-img'} />
                  </Block>
                  <Block classes={'e-text-center'}>
                    <Text type={'strong'} classes={'e-text-center e-subhead'}>Johnny Brava </Text>
                    <Text type={'p'} classes={'e-text-center e-text-grey-600 e-subhead e-padding-bottom-15'}> Lorem ipsum dolor sit amet, dico reprehendunt vis cu. </Text>
                  </Block>
                  <Block classes={'e-text-center'}>
                    <Text type={'a'} classes={'e-text-center'}>
                      <i className={'fa fa-facebook e-text-indigo-600 padding-16'}></i>
                    </Text>
                    <Text type={'a'} classes={'e-text-center'}>
                      <i className={'fa fa-twitter e-text-light-blue-300 padding-16'}></i>
                    </Text>
                    <Text type={'a'} classes={'e-text-center e-text-red-400'}>
                      <i className={'fa fa-google-plus e-text-red-400 padding-16'}></i>
                    </Text>
                  </Block>
                </CardContent>
                <CardFooter classes={'e-text-center no-border e-margin-bottom-15'}>
                  <Btn label={'all articles'} ripple={true} classes={'flat e-text-black e-text-uppercase explore-btn'} />
                </CardFooter>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-3 flex'}>
              <Card classes={'e-background-white grow flex col-direction'}>
                <CardContent classes={'e-background-purple-400 e-text-center grow'}>
                  <Text type={'strong'} classes={'e-title e-text-white'}> Silk UI Kit </Text>
                  <Text type={'small'} classes={'e-text-grey-300 e-body1 show'}> Demo version </Text>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-200'}> ZIP 93Mb </Text>
                </CardContent>
                <CardFooter classes={'e-text-center'}>
                  <Icon name={"action-get-app"} className={"e-text-grey-600"} />
                  <Text type={'a'} classes={'e-body2 e-text-uppercase'}>
                    <Text type={'strong'} classes={'e-text-center e-body1 v-align-tb'}> Download </Text>
                  </Text>
                </CardFooter>
              </Card>
            </Block>

            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-red-400'}>
                <CardHeader className={'border-b'}>
                  <Block classes={'flex space-between'}>
                    <Text type={'strong'} classes={'e-text-left e-body2 e-no-margin e-text-grey-200 e-text-uppercase'}> Viena </Text>
                    <Icon name={"device-brightness-high"} className={"e-text-right e-text-grey-200 v-align-middle"} />
                  </Block>
                </CardHeader>
                <CardContent classes={'e-text-center flex'}>
                  <Image src={'assets/img/cloudy.png'} height={'50px'} classes={'e-text-white margin-r-15'} />
                  <Block className={'margin-t-9'}>
                    <Text type={'span'} classes={'e-text-center e-display-1 e-text-white'}>21</Text>
                    <Text type={'span'} classes={'e-text-center e-display-1 e-text-white'}> &deg;</Text>
                    <Text type={'sup'} classes={'e-text-center e-display-1 e-text-white v-align-bm'}>c </Text>
                  </Block>
                </CardContent>
                <CardFooter classes={'e-text-left e-background-white e-no-padding'}>
                  <Text type={'strong'} classes={'e-body2 e-text-grey-600 e-text-uppercase show padding-para'}> august 23, monday </Text>
                </CardFooter>
              </Card>
            </Block>

            <Block classes={'brick brick-6 flex'}>
              <Card classes={'e-background-white grow flex col-direction'}>
                <CardHeader className={'border-b card-h-padding'}>
                  <Block classes={'flex space-between'}>
                    <Text type={'strong'} classes={'e-text-left e-body2 e-no-margin e-text-black e-text-uppercase'}> Viena </Text>
                    <Block classes={'navigation-btn'}>
                      <Btn icon={"hardware-keyboard-arrow-left"} ripple={false} type={'default'} classes={'e-text-grey-900 e-no-margin'} />
                      <Btn icon={"hardware-keyboard-arrow-right"} ripple={false} type={'default'} classes={'e-text-grey-900 e-no-margin'} />
                    </Block>
                  </Block>
                </CardHeader>
                <CardContent classes={'e-no-padding flex space-between grow'}>
                  <Block classes={'half-w e-no-margin border-r grow'}>
                    <Block classes={'e-background-grey-100 e-text-center'}>
                      <Text type={'strong'} classes={'e-body2 e-text-grey-600 e-text-uppercase show padding-para'}> august 23, monday </Text>
                    </Block>
                    <Block classes={'flex e-margin-top-15'}>
                      <Image src={'assets/img/weather-icon.png'} height={'50px'} classes={'e-text-white margin-r-15'} />
                      <Block className={'margin-t-9'}>
                        <Text type={'span'} classes={'e-text-center e-display-1 e-text-black'}>21</Text>
                        <Text type={'span'} classes={'e-text-center e-display-1 e-text-grey-600'}> &deg;</Text>
                        <Text type={'sup'} classes={'e-text-center e-display-1 e-text-grey-600 v-align-bm'}>c </Text>
                      </Block>
                    </Block>
                  </Block>

                  <Block classes={'brick-2 e-no-margin border-r grow'}>
                    <Block classes={'e-background-grey-100 e-text-center'}>
                      <Text type={'strong'} classes={'e-body2 e-text-grey-600 e-text-uppercase show padding-para'}> tue </Text>
                    </Block>
                    <Block className={'e-text-center'}>
                      <Block className={'e-margin-top-15'}>
                        <Image src={'assets/img/weather-icon.png'} height={'25px'} classes={'e-text-white'} />
                      </Block>
                      <Block className={'e-margin-bottom-15'}>
                        <Text type={'span'} classes={'e-text-center e-body1 e-text-black'}>23</Text>
                        <Text type={'span'} classes={'e-text-center e-body1 e-text-grey-600'}> &deg;</Text>
                      </Block>
                    </Block>
                  </Block>

                  <Block classes={'brick-2 e-no-margin border-r grow'}>
                    <Block classes={'e-background-grey-100 e-text-center'}>
                      <Text type={'strong'} classes={'e-body2 e-text-grey-600 e-text-uppercase show padding-para'}> wed </Text>
                    </Block>
                    <Block className={'e-text-center'}>
                      <Block className={'e-margin-top-15'}>
                        <Image src={'assets/img/weather-icon.png'} height={'25px'} classes={'e-text-white'} />
                      </Block>
                      <Block className={'e-margin-bottom-15'}>
                        <Text type={'span'} classes={'e-text-center e-body1 e-text-black'}>21</Text>
                        <Text type={'span'} classes={'e-text-center e-body1 e-text-grey-600'}> &deg;</Text>
                      </Block>
                    </Block>
                  </Block>

                  <Block classes={'brick-2 e-no-margin grow'}>
                    <Block classes={'e-background-grey-100 e-text-center'}>
                      <Text type={'strong'} classes={'e-body2 e-text-grey-600 e-text-uppercase show padding-para'}> thu </Text>
                    </Block>
                    <Block className={'e-text-center'}>
                      <Block className={'e-margin-top-15'}>
                        <Image src={'assets/img/weather-icon.png'} height={'25px'} classes={'e-text-white'} />
                      </Block>
                      <Block className={'e-margin-bottom-15'}>
                        <Text type={'span'} classes={'e-text-center e-body1 e-text-black'}>24</Text>
                        <Text type={'span'} classes={'e-text-center e-body1 e-text-grey-600'}> &deg;</Text>
                      </Block>
                    </Block>
                  </Block>
                </CardContent>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-6'}>
              <Card classes={'e-background-white card-h flex col-direction'}>
                <CardHeader classes={'border-b'}>
                  <Text type={'strong'} classes={'e-body2 e-text-uppercase'}> downloads</Text>
                  <Text type={'span'} classes={'e-text-center e-body1 e-background-green-700 e-text-white badge'}> 4 </Text>
                </CardHeader>
                <CardContent classes={'e-no-padding grow'}>
                  <List type={'navigation'}>
                    <ListItem classes={'padding-para border-b'}>
                      <Text type={'a'} classes={'e-text-center e-body1'}>
                        <Image src={'assets/img/zip.png'} height={'40px'} alt={'zip file'} classes={'e-left'}/>
                        <Block classes={'content e-left'}>
                          <Text type={'strong'} classes={'e-text-center e-body1'}> Silk-UI-Kit.zip </Text>
                          <Text type={'small'} classes={'e-text-center e-body1'}> 3Mb </Text>
                        </Block>
                        <Btn icon={"file-file-download"} ripple={false} className={'flat e-background-white download-btn e-right'} />
                      </Text>
                    </ListItem>
                    <ListItem classes={'padding-para border-b'}>
                      <Text type={'a'} classes={'e-text-center e-body1'}>
                        <Image src={'assets/img/pdf.png'} height={'40px'} alt={'pdf file'} classes={'e-left'}/>
                        <Block classes={'content e-left'}>
                          <Text type={'strong'} classes={'e-text-center e-body1'}> Silk-UI-Kit.pdf </Text>
                          <Text type={'small'} classes={'e-text-center e-body1'}> 8Mb </Text>
                        </Block>
                        <Btn icon={"file-file-download"} ripple={false} className={'flat e-background-white download-btn e-right'} />
                      </Text>
                    </ListItem>
                    <ListItem classes={'padding-para border-b'}>
                      <Text type={'a'} classes={'e-text-center e-body1'}>
                        <Image src={'assets/img/psd.png'} height={'40px'} alt={'psd file'} classes={'e-left'}/>
                        <Block classes={'content e-left'}>
                          <Text type={'strong'} classes={'e-text-center e-body1'}> Silk-UI-Kit.psd </Text>
                          <Text type={'small'} classes={'e-text-center e-body1'}> 3Mb </Text>
                        </Block>
                        <Btn icon={"file-file-download"} ripple={false} className={'flat e-background-white download-btn e-right'} />
                      </Text>
                    </ListItem>
                    <ListItem classes={'padding-para border-b'}>
                      <Text type={'a'} classes={'e-text-center e-body1'}>
                        <Image src={'assets/img/ai.png'} height={'40px'} alt={'ai file'} classes={'e-left'}/>
                        <Block classes={'content e-left'}>
                          <Text type={'strong'} classes={'e-text-center e-body1'}> Silk-UI-Kit.ai </Text>
                          <Text type={'small'} classes={'e-text-center e-body1'}> 5Mb </Text>
                        </Block>
                        <Btn icon={"file-file-download"} ripple={false} className={'flat e-background-white download-btn e-right'} />
                      </Text>
                    </ListItem>
                  </List>
                </CardContent>
                <CardFooter classes={'e-background-grey-100 e-text-center'}>
                  <Text type={'strong'} classes={'e-body2 e-text-black e-text-uppercase'}> download all </Text>
                </CardFooter>
              </Card>
            </Block>

            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white flex col-direction card-h'}>
                <CardContent classes={'flex col-direction e-text-center grow'}>
                  <Chip data={ChipVideo}/>
                  <Block className={'e-margin-top-25'}>
                    <Image src={'assets/img/video.png'} alt={'video'} height={'150px'} />
                  </Block>
                  <Text type={'h3'} classes={'e-text-center e-title e-padding-top-15'}>How to Trim Out </Text>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-600 e-padding-top-15'}> I whipped</Text>
                </CardContent>
                <CardFooter classes={'e-background-grey-100 e-text-center'}>
                  <Text type={'strong'} classes={'e-body2 e-text-black e-text-uppercase'}> Watch video </Text>
                </CardFooter>
              </Card>
            </Block>

            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white flex col-direction card-h'}>
                <CardContent classes={'flex col-direction e-text-center grow'}>
                  <Chip data={ChipPhoto}/>
                  <Block className={'e-margin-top-25'}>
                    <Image src={'assets/img/album.png'} alt={'photo album'} height={'150px'} />
                  </Block>
                  <Text type={'h3'} classes={'e-text-center e-title e-padding-top-15'}>How to Trim Out </Text>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-600 e-padding-top-15'}> I whipped</Text>
                </CardContent>
                <CardFooter classes={'e-background-grey-100 e-text-center'}>
                  <Text type={'strong'} classes={'e-body2 e-text-black e-text-uppercase'}> Watch gallery </Text>
                </CardFooter>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-3 flex col-direction'}>
              <Card classes={'e-background-white flex col-direction grow'}>
                <CardContent classes={'bg-twitter grow flex col-direction space-between'}>
                  <Block>
                    <Text type={'p'} classes={'e-text-left e-title e-text-white e-margin-top-15'}>
                      <Text type={'strong'} classes={'e-text-center e-text-white'}>
                        <i className={'fa fa-twitter e-text-white margin-r-15'}></i>
                        Lorem ipsum
                      </Text>
                    </Text>
                    <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-100 e-margin-top-15'}>
                      Lorem ipsum dolor sit amet, homero voluptatibus comprehensam et sea, an sonet lucilius pri.
                    </Text>
                  </Block>
                  <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-200 e-margin-top-15'}>3 hours ago </Text>
                </CardContent>
              </Card>

              <Card classes={'e-background-white flex col-direction grow'}>
                <CardContent classes={'bg-facebook grow flex col-direction space-between'}>
                  <Block>
                    <Text type={'p'} classes={'e-text-left e-title e-text-white'}>
                      <Text type={'strong'} classes={'e-text-center e-text-white'}>
                        <i className={'fa fa-twitter e-text-white margin-r-15'}></i>
                        Lorem ipsum
                      </Text>
                    </Text>
                    <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-100 e-margin-top-15'}>
                      Lorem ipsum dolor sit amet, homero voluptatibus comprehensam et sea, an sonet lucilius pri.Discere deserunt splendide ei eam.
                    </Text>
                  </Block>
                  <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-200 e-margin-top-15'}>3 hours ago </Text>
                </CardContent>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card classes={'card-h e-background-white flex col-direction'}>
                <CardHeader className={'e-text-center'}>
                  <Text type={'strong'} classes={'e-body2 e-text-black e-text-uppercase'}>progress </Text>
                  <Icon name={"device-brightness-high"} className={"e-text-right e-text-blasck v-align-middle e-right"} />
                </CardHeader>
                <CardContent classes={'grow e-margin-top-50'}>
                  <Progress type={'circle'} />
                  <Block className={'percent-in'}>
                    <Text type={'h3'} classes={'e-text-center e-display-2 e-text-black e-no-margin '}> 75 </Text>
                    <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-600'}> percent </Text>
                  </Block>
                </CardContent>
                <CardFooter classes={'e-text-center e-background-grey-100'}>
                  <Text type={'strong'} classes={'e-body2 e-text-black e-text-uppercase'}>more details </Text>
                </CardFooter>
              </Card>
            </Block>
            <Block classes={'brick brick-6'}>
              <Card classes={'card-h e-background-white'}>
                <CardContent classes={'e-no-padding card-h flex'}>
                  <Block classes={'brick-5 e-no-margin grow'}>
                    <Image src={'assets/img/untold.png'} classes={'e-img-rsp full-w  card-h margin-b-untold'} />
                  </Block>
                  <Block classes={'brick-7 e-no-margin grow flex col-direction space-between'}>
                    <Block classes={'flex col-direction grow'}>
                      <Block classes={'flex space-between padding-16'}>
                        <Text type={'h3'} classes={'e-text-left e-text-black e-display-1'}>Untold</Text>
                        <Block classes={'e-background-blue-600 circle padding-10'}>
                          <Text type={'h3'} classes={'e-text-center e-text-white -display-1'}>26 </Text>
                          <Text type={'p'} classes={'e-text-center e-text-white e-body1 margin-t-neg-10'}>august </Text>
                        </Block>
                      </Block>
                      <Block classes={'e-text-left padding-16'}>
                        <Text type={'strong'} classes={'e-text-left'}>
                          <Icon name={"communication-location-on"} className={"e-text-black"} />
                          Transilvania
                        </Text>
                        <Text type={'p'} classes={'e-text-left e-text-grey-600 e-body1 margin-l-25'}>Cluj Napoca, Romania </Text>
                      </Block>
                    </Block>
                    <Block>
                      <Block classes={'e-background-grey-100 padding-16 flex'}>
                        <Block classes={'padding-10'}>
                          <Text type={'small'} classes={'e-text-left e-text-grey-600 e-body1 e-text-uppercase'}> Days </Text>
                          <Text type={'p'} classes={'e-text-center e-headline'}>
                            <Text type={'strong'} classes={'e-text-center e-headline'}>12
                              <Text type={'strong'} classes={'e-text-center e-headline amr-look'}> &#8226;</Text>
                            </Text>
                          </Text>
                        </Block>
                        <Block classes={'padding-10'}>
                          <Text type={'small'} classes={'e-text-left e-text-grey-600 e-body1 e-text-uppercase'}> Hours </Text>
                          <Text type={'p'} classes={'e-text-center e-headline'}>
                            <Text type={'strong'} classes={'e-text-center e-headline'}>09
                              <Text type={'strong'} classes={'e-text-center e-headline amr-look'}> &#8226;</Text>
                            </Text>
                          </Text>
                        </Block>
                        <Block classes={'padding-10'}>
                          <Text type={'small'} classes={'e-text-left e-text-grey-600 e-body1 e-text-uppercase'}> Mins </Text>
                          <Text type={'p'} classes={'e-text-center e-headline'}>
                            <Text type={'strong'} classes={'e-text-center e-headline'}>47
                              <Text type={'strong'} classes={'e-text-center e-headline amr-look'}> &#8226;</Text>
                            </Text>
                          </Text>
                        </Block>
                        <Block classes={'padding-10'}>
                          <Text type={'small'} classes={'e-text-left e-text-grey-600 e-body1 e-text-uppercase'}> Sec </Text>
                          <Text type={'p'} classes={'e-text-center e-headline'}>
                            <Text type={'strong'} classes={'e-text-center e-headline'}>58</Text>
                          </Text>
                        </Block>
                      </Block>
                      <Block classes={'e-text-center e-background-grey-900 card-suplimentary-actions'}>
                        <Text type={'strong'} classes={'e-body2 e-text-grey-100 e-text-uppercase'}> purchase tickets</Text>
                      </Block>
                    </Block>
                  </Block>
                </CardContent>
              </Card>
            </Block>
          </Block>

        </Block>
      </Block>
    );
  }
}

module.exports = SilkWidgets;
