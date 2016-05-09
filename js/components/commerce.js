import React from 'react';
import ClassNames from 'classnames';

import { Block,
        Btn,
        Icon,
        Image,
        List, ListItem,
        Text, } from 'react-essence';

class SilkCommerce extends React.Component {

  render() {
    return (
      <Block className={'e-background-deep-purple-100'}>
        <Block classes={'silkCommerce e-container e-padding-top-25'}>
          <Text type={'h1'} classes={'e-text-center e-display-1 e-text-deep-purple-300'}> Ecommerce </Text>
          <Block classes={'e-row e-background-light-green-400 e-no-margin card-h'}>
            <Block classes={'brick brick-5 e-text-right padding-16'}>
              <Image src={'assets/img/woman.png'} height={'386px'} />
            </Block>
            <Block classes={'brick brick-2 flex col-direction justify-end e-text-center'}>
              <Block className={'e-margin-top-25 e-margin-bottom-25'}>
                <Text type={'a'} classes={'e-text-center e-caption'}>
                  <Icon name={"image-lens"} className={"e-text-grey-200"} />
                </Text>
                <Text type={'a'} classes={'e-text-center e-caption'}>
                  <Icon name={"image-lens"} className={"e-text-grey-200 v-align style-i-off"} />
                </Text>
                <Text type={'a'} classes={'e-text-center e-caption'}>
                  <Icon name={"image-lens"} className={"e-text-grey-200 v-align style-i-off"} />
                </Text>
              </Block>
            </Block>
            <Block classes={'brick brick-5 flex col-direction'}>
              <Text type={'h1'} classes={'e-text-left e-text-white e-display-2 e-no-margin'}> Hella narwhal </Text>
              <Text type={'h1'} classes={'e-text-left e-text-white e-display-2 e-no-margin'}> Cosby swea. </Text>
              <Text type={'p'} classes={'e-text-left e-text-white e-body1 e-margin-top-15'}>
                 Lorem ipsum dolor sit amet, his rebum veniam at, ut feugiat maiorum accommodare ius, eos at dicat adolescens.
              </Text>
              <Block>
                <Btn label={'shop now'} ripple={true} classes={'e-text-grey-100 e-text-uppercase e-no-margin e-margin-top-15 explore-btn'} />
              </Block>
            </Block>
          </Block>

          <Block classes={'e-row bg-boots card-h e-no-margin e-margin-top-25'}>
            <Block classes={'brick brick-2 flex col-direction'}>
              <Text type={'a'} classes={'e-text-left e-display-2'}>
                <Icon name={"hardware-keyboard-arrow-left"} className={"e-text-white"} />
              </Text>
            </Block>
            <Block classes={'brick brick-8 e-text-center flex col-direction justify-end'}>
              <Block classes={'flex col-direction grow'}>
                <Text type={'p'} classes={'e-text-center e-text-white e-headline e-margin-top-50'}> Spring/Summer </Text>
                <Text type={'h1'} classes={'e-text-center e-text-white e-display-2 e-no-margin'}> Diemmese SS16 Colection </Text>
                <Block>
                  <Btn label={'watch collection'} ripple={true} classes={'e-text-grey-100 e-text-uppercase e-no-margin e-margin-top-15 explore-btn'} />
                </Block>
              </Block>
              <Block className={'e-margin-top-25 e-margin-bottom-25'}>
                <Text type={'a'} classes={'e-text-center e-caption'}>
                  <Icon name={"image-lens"} className={"e-text-grey-200"} />
                </Text>
                <Text type={'a'} classes={'e-text-center e-caption'}>
                  <Icon name={"image-lens"} className={"e-text-grey-200 v-align style-i-off"} />
                </Text>
                <Text type={'a'} classes={'e-text-center e-caption'}>
                  <Icon name={"image-lens"} className={"e-text-grey-200 v-align style-i-off"} />
                </Text>
              </Block>
            </Block>
            <Block classes={'brick brick-2 flex col-direction'}>
              <Text type={'a'} classes={'e-display-2 e-text-right'}>
                <Icon name={"hardware-keyboard-arrow-right"} className={"e-text-white"} />
              </Text>
            </Block>
          </Block>

          <Block classes={'e-row e-margin-top-25'}>
            <Block classes={'brick brick-3 card-h e-background-white e-no-padding flex col-direction'}>
              <Block classes={'flex space-between padding-16 border-b'}>
                <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-black e-text-uppercase'}> men </Text>
                <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600 e-text-uppercase'}> all </Text>
              </Block>
              <Block classes={'flex space-between padding-16 border-b'}>
                <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-black e-text-uppercase'}> blazers </Text>
                <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600 e-text-uppercase'}>
                  <Icon name={"hardware-keyboard-arrow-right"} className={"e-text-black"} />
                </Text>
              </Block>
              <Block classes={'flex space-between padding-16 border-b'}>
                <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-black e-text-uppercase'}> jeans </Text>
                <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600 e-text-uppercase'}>
                  <Icon name={"hardware-keyboard-arrow-down"} className={"e-text-black"} />
                </Text>
              </Block>
              <Block classes={'flex space-between padding-list border-b e-background-grey-100'}>
                <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600'}>All Jeans </Text>
              </Block>
              <Block classes={'flex space-between padding-list border-b e-background-grey-100'}>
                <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600'}>Straight </Text>
              </Block>
              <Block classes={'flex space-between padding-list border-b e-background-grey-100'}>
                <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600'}>Slim Jeans </Text>
              </Block>
              <Block classes={'flex space-between padding-list border-b e-background-grey-100'}>
                <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600'}>Selvedge Denim </Text>
              </Block>
              <Block classes={'flex space-between padding-16'}>
                <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-black e-text-uppercase'}> Knitwear </Text>
              </Block>
            </Block>

            <Block classes={'brick brick-3 e-no-padding'}>
              <Block classes={'brick brick-12 e-background-white e-no-padding'}>
                <Block classes={'flex space-between padding-16 border-b'}>
                  <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-black e-text-uppercase'}>Clothing sizes </Text>
                  <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600 e-text-uppercase'}> all </Text>
                </Block>
                <Block>
                  <Text type={'a'} classes={'e-text-center e-body1 sizes'}>S </Text>
                  <Text type={'a'} classes={'e-text-center e-body1 sizes border-l-r'}>M </Text>
                  <Text type={'a'} classes={'e-text-center e-body1 sizes'}>L </Text>
                  <Text type={'a'} classes={'e-text-center e-body1 sizes border-l-r'}>XL </Text>
                  <Text type={'a'} classes={'e-text-center e-body1 sizes'}>XXL </Text>
                </Block>
              </Block>
              <Block classes={'brick brick-12 e-background-white e-no-padding'}>
                <Block classes={'flex space-between padding-16 border-b'}>
                  <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-black e-text-uppercase'}>colors </Text>
                  <Text type={'strong'} classes={'e-text-center e-body2 e-no-margin e-text-grey-600 e-text-uppercase'}> all </Text>
                </Block>
              </Block>
            </Block>
            <Block classes={'brick brick-3'}>brick-3</Block>
            <Block classes={'brick brick-3'}>brick-3</Block>
          </Block>


        </Block>
      </Block>
    );
  }
}

module.exports = SilkCommerce;
