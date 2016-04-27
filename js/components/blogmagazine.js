import React from 'react';
import ClassNames from 'classnames';

import { Block, Btn, Card, CardHeader, CardContent, CardFooter, Icon, Text } from 'react-essence';

class SilkBlogMagazine extends React.Component {

  render() {
    return (
      <Block className={'e-background-blue-100'}>
        <Block classes={'silkBlogMagazine e-container e-padding-top-25'}>
          <Text type={'h1'} classes={'e-text-center e-display-1 e-text-blue-300'}> Blog / Magazine </Text>
          <Block classes={'e-row border'}>
            <Block classes={'brick brick-9 border'}>
              <Block classes={'e-row border'}>
                <Block classes={'brick brick-12 border bg-mountain'}>
                  <Block className={'e-text-center e-padding-top-15'}>
                    <Btn label={'food&drink'} ripple={true} type={'default'} classes={'e-text-grey-100 e-text-uppercase explore-btn'} />
                  </Block>
                  <Block className={'centered'}>
                    <Block classes={'e-text-center half-w e-margin-top-75'}>
                      <Text type={'h1'} classes={'e-text-capitalize e-text-white e-display-3'}><b>Stop gratuitous UI Animation</b></Text>
                      <Text type={'p'} classes={'e-text-center e-subhead e-text-grey-200'}>
                        Lorem ipsum dolor sit amet, nulla vidisse impedit vix et. Nam rebum explicari an, vidit nusquam vulputate sea.
                      </Text>
                      <Btn label={'read more'} ripple={true} type={'default'} classes={'e-text-grey-100 e-text-uppercase explore-btn read-btn'} />
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
                  </Block>
                </Block>
              </Block>
              <Block classes={'e-row border'}>
                <Block classes={'brick brick-4 border'}>
                  <Card className={'e-background-white'}>
                    <CardHeader classes={'bg-road'}>
                      <Btn label={'travel'} ripple={true} type={'default'} classes={'e-text-grey-100 e-text-uppercase explore-btn'} />
                    </CardHeader>
                    <CardContent>
                     <Text type={'h2'} classes={'e-text-left e-title'}> Best of Romania 2015: Revealing what roks </Text>
                     <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-600'}> I whipped the Scotch tape from my pocket and said </Text>
                    </CardContent>
                    <CardFooter className={'e-text-left'}>
                      <Text type={'a'} classes={'e-text-center e-body2'}>
                        <Icon name={"action-favorite-outline"} className={"e-text-grey-600 v-align"} />
                      </Text>
                      <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 345</Text>
                      <Text type={'a'} classes={'e-text-center e-body2'}>
                        <Icon name={"communication-messenger"} className={"e-text-grey-600 v-align"} />
                      </Text>
                      <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 19</Text>
                      <Text type={'a'} classes={'e-text-center e-body2'}>
                        <Icon name={"image-panorama-fisheye"} className={"e-text-grey-600 v-align"} />
                      </Text>
                      <Text type={'span'} classes={'e-text-center e-text-grey-600 e-body2 padding-r-15'}> 3 hours ago</Text>
                    </CardFooter>
                  </Card>
                </Block>
                <Block classes={'brick brick-8 border'}>
                  
                </Block>
              </Block>
            </Block>
            <Block classes={'brick brick-3 border '}>brick-3</Block>
          </Block>

          <Block classes={'e-row border '}>
            <Block classes={'brick brick-9  border '}>
              <Block classes={'e-row border'}>
                <Block classes={'brick brick-4 e-h-start e-v-center border'}>brick-4</Block>
                <Block classes={'brick brick-4 e-h-center e-v-center border'}>brick-4</Block>
                <Block classes={'brick brick-4 e-h-end e-v-center border'}>brick-4</Block>
              </Block>
              <Block classes={'e-row border'}>
                <Block classes={'brick brick-8 border'}>brick-8</Block>
                <Block classes={'brick brick-4 border'}>brick-4</Block>
              </Block>
            </Block>
            <Block classes={'brick brick-3 e-h-start e-v-end border '}>brick-3
            </Block>
          </Block>

          <Block classes={'e-row border'}>
            <Block classes={'brick brick-4 e-h-start e-v-center border'}>brick-4</Block>
            <Block classes={'brick brick-4 e-h-center e-v-center border'}>brick-4</Block>
            <Block classes={'brick brick-4 e-h-end e-v-center border'}>brick-4</Block>
          </Block>

          <Block classes={'e-row border'}>
            <Block classes={'brick brick-3 e-h-end e-v-end border'}>brick-3</Block>
            <Block classes={'brick brick-9 e-h-start e-v-end border'}>brick-9</Block>
          </Block>

          <Block classes={'e-row border'}>
            <Block classes={'brick brick-6 e-h-end e-v-end border'}>brick-6</Block>
            <Block classes={'brick brick-6 e-h-start e-v-end border'}>brick-6</Block>
          </Block>

          <Block classes={'e-row border'}>
            <Block classes={'brick brick-3 border'}>brick-3</Block>
            <Block classes={'brick brick-3 border'}>brick-3</Block>
            <Block classes={'brick brick-3 border'}>brick-3</Block>
            <Block classes={'brick brick-3 border'}>brick-3</Block>
          </Block>

          <Block classes={'e-row border'}>
            <Block classes={'brick brick-3 e-h-start e-v-center border'}>brick-3</Block>
            <Block classes={'brick brick-3 e-h-center e-v-center border'}>brick-3</Block>
            <Block classes={'brick brick-6 e-h-end e-v-center border'}>brick-6</Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

module.exports = SilkBlogMagazine;
