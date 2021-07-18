import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function App() {
  const [player, setPlayer] = useState('cross')
  const [a11, setA11] = useState()
  const [a12, setA12] = useState()
  const [a13, setA13] = useState()
  const [a21, setA21] = useState()
  const [a22, setA22] = useState()
  const [a23, setA23] = useState()
  const [a31, setA31] = useState()
  const [a32, setA32] = useState()
  const [a33, setA33] = useState()

  const Circle = () => {
    return (
      <View
        style={{
          width: width * 0.2,
          height: width * 0.2,
          borderRadius: 100,
          borderWidth: 5,
          borderColor: '#000',
          borderStyle: 'solid',
        }}
      />
    )
  }

  const Cross = () => {
    return (
      <View
        style={{ rotation: 45, alignItems: 'center', justifyContent: 'center' }}
      >
        <View
          style={{
            width: 5,
            height: width * 0.28,
            backgroundColor: '#000',
            borderRadius: 100,
            position: 'absolute',
          }}
        />
        <View
          style={{
            height: 5,
            width: width * 0.28,
            backgroundColor: '#000',
            borderRadius: 100,
            position: 'absolute',
          }}
        />
      </View>
    )
  }

  const circle = <Feather name="circle" size={90} color="black" />
  const cross = <AntDesign name="plus" size={130} color="black" />

  const check = () => {
    if (a12 === cross) {
      console.log('cross')
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ transform: [{ rotate: '180deg' }], height: width * 0.2 }}>
        <Text
          style={[
            styles.player,
            {
              color: player == 'circle' ? '#FF6100' : '#333',
              fontSize: player == 'circle' ? 50 : 40,
            },
          ]}
        >
          Your step
        </Text>
      </View>
      <View style={styles.playArea}>
        <View
          style={{
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'space-between',
            height: width * 0.95,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-between',
              width: width * 0.95,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (a11) {
                } else {
                  if (player == 'circle') {
                    setA11(circle)
                    setPlayer('cross')
                  } else {
                    setA11(cross)
                    setPlayer('circle')
                  }
                }
              }}
            >
              <View style={styles.cell}>{a11}</View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (a12) {
                } else {
                  if (player == 'circle') {
                    setA12(circle)
                    setPlayer('cross')
                  } else {
                    setA12(cross)
                    setPlayer('circle')
                  }
                }
                check()
              }}
            >
              <View style={styles.cell}>{a12}</View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (a13) {
                } else {
                  if (player == 'circle') {
                    setA13(circle)
                    setPlayer('cross')
                  } else {
                    setA13(cross)
                    setPlayer('circle')
                  }
                }
              }}
            >
              <View style={styles.cell}>{a13}</View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-between',
              width: width * 0.95,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (a21) {
                } else {
                  if (player == 'circle') {
                    setA21(circle)
                    setPlayer('cross')
                  } else {
                    setA21(cross)
                    setPlayer('circle')
                  }
                }
              }}
            >
              <View style={styles.cell}>{a21}</View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (a22) {
                } else {
                  if (player == 'circle') {
                    setA22(circle)
                    setPlayer('cross')
                  } else {
                    setA22(cross)
                    setPlayer('circle')
                  }
                }
              }}
            >
              <View style={styles.cell}>{a22}</View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (a23) {
                } else {
                  if (player == 'circle') {
                    setA23(circle)
                    setPlayer('cross')
                  } else {
                    setA23(cross)
                    setPlayer('circle')
                  }
                }
              }}
            >
              <View style={styles.cell}>{a23}</View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              justifyContent: 'space-between',
              width: width * 0.95,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                if (a31) {
                } else {
                  if (player == 'circle') {
                    setA31(circle)
                    setPlayer('cross')
                  } else {
                    setA31(cross)
                    setPlayer('circle')
                  }
                }
              }}
            >
              <View style={styles.cell}>{a31}</View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (a32) {
                } else {
                  if (player == 'circle') {
                    setA32(circle)
                    setPlayer('cross')
                  } else {
                    setA32(cross)
                    setPlayer('circle')
                  }
                }
              }}
            >
              <View style={styles.cell}>{a32}</View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (a33) {
                } else {
                  if (player == 'circle') {
                    setA33(circle)
                    setPlayer('cross')
                  } else {
                    setA33(cross)
                    setPlayer('circle')
                  }
                }
              }}
            >
              <View style={styles.cell}>{a33}</View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.lineH, { top: width * 0.3, left: 0 }]} />
        <View style={[styles.lineH, { bottom: width * 0.3, right: 0 }]} />
        <View style={[styles.lineV, { top: 0, left: width * 0.3 }]} />
        <View style={[styles.lineV, { borrom: 0, right: width * 0.3 }]} />
      </View>
      <View style={{ height: width * 0.2 }}>
        <Text
          style={[
            styles.player,
            {
              color: player == 'cross' ? '#FF6100' : '#333',
              fontSize: player == 'cross' ? 50 : 40,
            },
          ]}
        >
          Your step
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  playArea: {
    width: width * 0.95,
    height: width * 0.95,
  },
  lineH: {
    height: 5,
    width: width * 0.95,
    borderRadius: 100,
    backgroundColor: '#666',
    position: 'absolute',
  },
  lineV: {
    width: 5,
    height: width * 0.95,
    borderRadius: 100,
    backgroundColor: '#666',
    position: 'absolute',
  },
  cell: {
    width: width * 0.3,
    height: width * 0.3,
    backgroundColor: '#11ff1111',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '45deg' }],
  },
  player: {
    fontSize: 40,
    letterSpacing: 2,
  },
})
