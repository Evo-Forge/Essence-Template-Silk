import React from 'react';
import ClassNames from 'classnames';

import { Block, Btn, Divider, Icon, Image, Input, List, ListItem, Text } from 'react-essence';

class SilkArticles extends React.Component {

  render() {
    return (
      <Block className={'e-background-deep-orange-100 e-padding-bottom-50'}>
        <Block classes={'silkArticles e-container e-padding-top-25'}>
          <Text type={'h1'} classes={'e-text-center e-display-1 e-text-deep-orange-300'}> Articles </Text>
          <Block classes={'e-container e-background-white e-padding-bottom-50'}>
            <Block classes={'bg-winter flex'}>
              <Block classes={'brick-6 e-text-center e-margin-top-150 e-margin-bottom-100'}>
                <Text type={'small'} classes={'e-text-center e-body1 e-text-grey-300'}>May 11. 2015 9.25 pm  </Text>
                <Text type={'h1'} classes={'e-text-center e-display-3 e-text-white'}> Romanian
                   <Text type={'strong'} classes={'e-text-center e-display-3 e-text-black'}> Adventures </Text>
                   <Text type={'em'} classes={'e-text-center e-display-3 e-text-black'}> in </Text>
                   Wanderlands
                </Text>
                <Text type={'strong'} classes={'e-text-center e-body1'}>
                  <Text type={'em'} classes={'e-text-center e-body1 e-text-grey-500'}> by </Text>
                  Johnny Brava
                </Text>
              </Block>
            </Block>

            <Block classes={'width-80 margin-auto e-margin-top-50'}>
              <Text type={'p'} classes={'e-text-left e-body1 first-p'}>Lorem ipsum dolor sit amet, nostro corpora percipitur in usu, possit mentitum mnesarchum vim an, est ut aperiam accusamus persequeris. An nulla corpora sed, ea mel summo reprimique, ad laoreet facilisi torquatos quo. Homero melius inciderint eum no, habemus fabellas at mea. Facete posidonium sed ex. In usu labore referrentur, ea vim ludus iisque. Eos harum atomorum an, id mundi nostro per. Ex blandit detracto mediocritatem nam, ea summo argumentum quo.
                Lorem ipsum dolor sit amet, eripuit adipisci mel ad, zril alterum fierent usu te. Te pri munere denique lobortis. Te ubique pericula vis, pro quem detracto accusata id, utinam laoreet te est. Fuisset mediocrem mei ei.
                Lorem ipsum dolor sit amet, eripuit adipisci mel ad, zril alterum fierent usu te. Te pri munere denique lobortis.
                Lorem ipsum dolor sit amet, eripuit adipisci mel ad, zril alterum fierent usu te. Te pri munere denique lobortis.
              </Text>
              <Text type={'h2'} classes={'e-text-left e-headline e-margin-top-50 e-margin-bottom-25'}>Lorem ipsum dolor sit amet, eripuit adipisci mel ad, zril alterum fierent usu te. Te pri munere denique lobortis. Te ubique pericula vis. </Text>
              <Image src={'assets/img/view.jpg'} classes={'full-w e-img-rsp'} />
              <Text type={'small'} classes={'e-caption e-text-grey-600'}>Lorem ipsum dolor sit amet, eripuit adipisci mel ad, zril alterum fierent usu te</Text>
              <Text type={'p'} classes={'e-text-left e-body1 e-margin-top-15'}>Lorem ipsum dolor sit amet, dolore ignota sea id, mel ut aeque altera. Adipisci comprehensam qui cu, no admodum denique nominavi vix. An petentium ocurreret vim, vide iisque accusam et mei, vocibus volutpat usu ne. Eum ea delicata ocurreret definitionem, prima solum erant ad mea, eu decore virtute sadipscing mel. Duo dolore delenit mentitum cu, at eam stet sententiae, appetere pericula ea mea.
              </Text>

              <Block classes={'width-80 margin-auto e-text-center e-margin-top-50 e-margin-bottom-50'}>
                <Icon name={"editor-format-quote"} className={"e-text-grey-600 e-display-1"} />
                <Text type={'em'} classes={'e-text-center e-display-1'}> Partiendo expetendis in quo. Justo putant intellegam pri te, insolens reprimique ad pri, id per commodo gloriatur </Text>
                <Icon name={"editor-format-quote"} className={"e-text-grey-600 e-display-1"} />
              </Block>

              <Text type={'p'} classes={'e-text-left e-body1 e-margin-bottom-25'}>Lorem ipsum dolor sit amet, nostro corpora percipitur in usu, possit mentitum mnesarchum vim an, est ut aperiam accusamus persequeris. An nulla corpora sed, ea mel summo reprimique, ad laoreet facilisi torquatos quo. Homero melius inciderint eum no, habemus fabellas at mea. Facete posidonium sed ex. In usu labore referrentur, ea vim ludus iisque. Eos harum atomorum an, id mundi nostro per. Ex blandit detracto mediocritatem nam, ea summo argumentum quo.
                Lorem ipsum dolor sit amet, eripuit adipisci mel ad, zril alterum fierent usu te. Te pri munere denique lobortis. Te ubique pericula vis, pro quem detracto accusata id, utinam laoreet te est. Fuisset mediocrem mei ei.
                Lorem ipsum dolor sit amet, eripuit adipisci mel ad, zril alterum fierent usu te. Te pri munere denique lobortis.
                Lorem ipsum dolor sit amet, eripuit adipisci mel ad, zril alterum fierent usu te. Te pri munere denique lobortis.
                Lorem ipsum dolor sit amet, ancillae noluisse mel ea. Partiendo expetendis in quo. Justo putant intellegam pri te, insolens reprimique ad pri, id per commodo gloriatur. Labore scripta fabulas vix et.
              </Text>

              <Block classes={'e-row flex space-between'}>
                <Block classes={'brick brick-4'}>
                  <Image src={'assets/img/romania2.png'} height={'300px'} classes={'full-w e-img-rsp'}/>
                </Block>
                <Block classes={'brick brick-8'}>
                  <Image src={'assets/img/romania1.jpg'} height={'300px'} classes={'full-w e-img-rsp'}/>
                </Block>
                <Block classes={'brick brick-8'}>
                  <Image src={'assets/img/romania3.png'} height={'300px'} classes={'full-w e-img-rsp'}/>
                </Block>
                <Block classes={'brick brick-4'}>
                  <Image src={'assets/img/romania4.png'} height={'300px'} classes={'full-w e-img-rsp'}/>
                </Block>
              </Block>

              <Block classes={'e-row e-margin-top-15'}>
                <Block classes={'brick brick-6'}>
                  <Text type={'p'} classes={'e-text-left e-body1'}>
                    Lorem ipsum dolor sit amet, per tota postulant an, et alii doctus option quo. Et quo ponderum imperdiet, sed zril altera iisque cu, cum errem elaboraret et. Malis facilis partiendo vix ad, ius eu volutpat ocurreret adversarium. Id veri prima decore his. Graece indoctum consectetuer mei an.
                    Eam ut mediocrem periculis adolescens, et vel laudem iuvaret invidunt, eos in qualisque definitionem. Per at esse singulis evertitur, et nam solet putant.
                    Lorem ipsum dolor sit amet, ne qui atqui fierent. In aliquip malorum fabellas eum. Est quaeque petentium reprehendunt ad, veri dictas in has, ne usu maiorum constituto.
                  </Text>
                </Block>
                <Block classes={'brick brick-6'}>
                  <Text type={'h2'} classes={'e-text-left e-headline'}>Lorem ipsum dolor sit amet, eripuit adipisci mel ad, zril alterum fierent usu te. Te pri munere denique lobortis. Te ubique pericula vis. </Text>
                </Block>
              </Block>

              <Text type={'p'} classes={'e-text-left e-body1 e-margin-bottom-25'}>Lorem ipsum dolor sit amet, nostro corpora percipitur in usu, possit mentitum mnesarchum vim an, est ut aperiam accusamus persequeris. An nulla corpora sed, ea mel summo reprimique, ad laoreet facilisi torquatos quo. Homero melius inciderint eum no, habemus fabellas at mea. Facete posidonium sed ex. In usu labore referrentur, ea vim ludus iisque. Eos harum atomorum an, id mundi nostro per. Ex blandit detracto mediocritatem nam, ea summo argumentum quo.
                Lorem ipsum dolor sit amet, eripuit adipisci mel ad, zril alterum fierent usu te. Te pri munere denique lobortis. Te ubique pericula vis, pro quem detracto accusata id, utinam laoreet te est. Fuisset mediocrem mei ei.
                Lorem ipsum dolor sit amet, eripuit adipisci mel ad, zril alterum fierent usu te. Te pri munere denique lobortis.
                Lorem ipsum dolor sit amet, eripuit adipisci mel ad, zril alterum fierent usu te. Te pri munere denique lobortis.
                Lorem ipsum dolor sit amet, ancillae noluisse mel ea. Partiendo expetendis in quo. Justo putant intellegam pri te, insolens reprimique ad pri, id per commodo gloriatur. Labore scripta fabulas vix et.
              </Text>

              <Block classes={'e-text-center social'}>
                <Text type={'a'} classes={'e-text-center e-background-light-blue-300'}>
                  <i className={'fa fa-twitter e-text-white'}></i>
                  <Text type={'span'} classes={'e-text-center e-body1 e-text-white'}>125</Text>
                </Text>
                <Text type={'a'} classes={'e-text-center e-background-indigo-600'}>
                  <i className={'fa fa-facebook e-text-white'}></i>
                  <Text type={'span'} classes={'e-text-center e-body1 e-text-white'}>235</Text>
                </Text>
                <Text type={'a'} classes={'e-text-center e-background-red-400'}>
                  <i className={'fa fa-google-plus e-text-white'}></i>
                  <Text type={'span'} classes={'e-text-center e-body1 e-text-white'}>102</Text>
                </Text>
              </Block>
            </Block>

            <Block classes={'width-90 e-background-grey-200 margin-auto e-margin-top-50 e-padding-bottom-25'}>
              <Text type={'p'} classes={'e-text-center e-title e-text-uppercase e-padding-top-25 e-margin-bottom-25'}> 12 Comments </Text>

              <Block classes={'width-90 margin-auto'}>
                <Block className={'flex'}>
                  <Block>
                    <Image src={'assets/img/profil2.jpg'} alt={'Star Wars'} classes={'e-avatar'}/>
                  </Block>
                  <Block>
                    <Text type={'strong'} classes={'e-text-left e-title'}> Paul Costantea </Text>
                    <Text type={'small'} classes={'e-text-left e-body1 e-text-grey-600'}> 2 days ago </Text>
                    <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-800'}>Lorem ipsum dolor sit amet, ne qui atqui fierent. In aliquip malorum fabellas eum. Est quaeque petentium reprehendunt ad, veri dictas in has, ne usu maiorum constituto. Eam ut mediocrem periculis adolescens, et vel laudem iuvaret invidunt, eos in qualisque definitionem. Per at esse singulis evertitur, et nam solet putant.
                      Lorem ipsum dolor sit amet, ne qui atqui fierent. In aliquip malorum fabellas eum. Est quaeque petentium reprehendunt ad.
                    </Text>
                    <Text type={'a'} classes={'e-text-center e-body1'}> Like </Text>
                    <Text type={'span'} classes={'e-text-center e-body1'}> &#9679; </Text>
                    <Text type={'a'} classes={'e-text-center e-body1'}> Reply </Text>
                  </Block>
                </Block>
                <Block classes={'width-90 margin-auto e-margin-top-25'}>
                  <Block className={'flex'}>
                    <Block>
                      <Image src={'assets/img/profile.jpg'} alt={'Star Wars'} classes={'e-avatar'}/>
                    </Block>
                    <Block>
                      <Text type={'strong'} classes={'e-text-left e-title'}> Johnny Brava </Text>
                      <Text type={'small'} classes={'e-text-left e-body1 e-text-grey-600'}> 2 days ago </Text>
                      <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-800'}>
                        Lorem ipsum dolor sit amet, ne qui atqui fierent. In aliquip malorum fabellas eum. Est quaeque petentium reprehendunt ad, veri dictas in has, ne usu maiorum constituto.
                      </Text>
                      <Text type={'a'} classes={'e-text-center e-body1'}> Like </Text>
                      <Text type={'span'} classes={'e-text-center e-body1'}> &#9679; </Text>
                      <Text type={'a'} classes={'e-text-center e-body1'}> Reply </Text>
                    </Block>
                  </Block>
                </Block>
              </Block>

              <Block classes={'width-90 margin-auto e-margin-top-25'}>
                <Block className={'flex'}>
                  <Block>
                    <Image src={'assets/img/profil3.jpg'} alt={'Star Wars'} classes={'e-avatar'}/>
                  </Block>
                  <Block>
                    <Text type={'strong'} classes={'e-text-left e-title'}> Raul Miclea </Text>
                    <Text type={'small'} classes={'e-text-left e-body1 e-text-grey-600'}> 2 days ago </Text>
                    <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-800'}>Lorem ipsum dolor sit amet, ne qui atqui fierent. In aliquip malorum fabellas eum. Est quaeque petentium reprehendunt ad, veri dictas in has, ne usu maiorum constituto. Eam ut mediocrem periculis adolescens, et vel laudem iuvaret invidunt, eos in qualisque definitionem. Per at esse singulis evertitur, et nam solet putant.
                      Lorem ipsum dolor sit amet, ne qui atqui fierent. In aliquip malorum fabellas eum. Est quaeque petentium reprehendunt ad.
                    </Text>
                    <Text type={'a'} classes={'e-text-center e-body1'}> Like </Text>
                    <Text type={'span'} classes={'e-text-center e-body1'}> &#9679; </Text>
                    <Text type={'a'} classes={'e-text-center e-body1'}> Reply </Text>
                  </Block>
                </Block>
              </Block>

              <Block classes={'width-90 margin-auto e-margin-top-25 e-background-white comment-box'}>
                <Block classes={'flex'}>
                  <Block>
                    <Image src={'assets/img/profile.jpg'} alt={'Star Wars'} classes={'e-avatar e-no-padding e-margin-top-15 margin-r-15'}/>
                  </Block>
                  <Input type={'textarea'} name={'label'} rows={3} classes={'border-i e-background-grey-100 width-90'}/>
                </Block>
                <Block classes={'margin-auto flex justify-end'}>
                  <Btn label={'Post comment'} ripple={true} type={'primary'} className={'flat btn-radius margin-r-15'} />
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

module.exports = SilkArticles;
