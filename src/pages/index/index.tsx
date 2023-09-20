import {Component} from "react";
import {Text, View} from '@tarojs/components'
import './index.scss'


export default class Index extends Component {

    // onLoad
    onLoad() {
        console.log("load!!!")
    }

    render() {
        return (
            <View className='index'>
                <View className='components-page'>
                    <Text>flex-direction: row 横向布局</Text>
                    <View className='flex-wrp' style='flex-direction:row;'>
                        <View className='flex-item demo-text-1' />
                        <View className='flex-item demo-text-2' />
                        <View className='flex-item demo-text-3' />
                    </View>
                    <Text>flex-direction: column 纵向布局</Text>
                    <View className='flex-wrp' style='flex-direction:column;'>
                        <View className='flex-item flex-item-V demo-text-1' />
                        <View className='flex-item flex-item-V demo-text-2' />
                        <View className='flex-item flex-item-V demo-text-3' />
                    </View>
                </View>
            </View>
        )
    }

}
