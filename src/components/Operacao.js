import React from 'react'
import { Picker} from 'react-native'

export default props => (
        <Picker>
            <Picker.item label="Soma" value="soma" />
            <Picker.item label="Subtracao" value="subtracao" />
        </Picker>
)
