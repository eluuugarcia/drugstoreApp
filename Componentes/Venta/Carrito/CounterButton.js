import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

class CounterButton extends Component {
  state = {
    open: 0,
    animation: new Animated.Value(0),
    tapAnimation: new Animated.Value(0)
  };

  startCounterAnimation = () => {
    if (!this.state.open) {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 300
      }).start(() => {
        this.props.increaseCount();
        this.setState({ open: 1 });
      });
    } else {
      this.props.increaseCount();
    }
  };

  closeCounterAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 300
    }).start(() => this.setState({ open: 0 }));
  };

  animateQuanitityChange = () => {
    Animated.timing(this.state.tapAnimation, {
      toValue: 1,
      duration: 500
    }).start(() => this.state.tapAnimation.setValue(0));
  };

  render() {
    const incrementBoxScaleX = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.7]
    });

    const incrementBoxtranslateX = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 30]
    });

    const incrementBoxRotate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"]
    });

    const incrementBoxTransformStyle = {
      transform: [
        {
          scale: incrementBoxScaleX
        },
        {
          translateX: incrementBoxtranslateX
        },
        {
          rotate: incrementBoxRotate
        }
      ]
    };

    const counterDisplayScaleX = this.state.animation.interpolate({
      inputRange: [0, 0.2, 1],
      outputRange: [0.9, 1, 1.25]
    });

    const counterDisplaytranslateX = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [120, 100]
    });

    const counterDisplayTransformStyle = {
      transform: [
        {
          translateX: counterDisplaytranslateX
        },
        {
          scale: counterDisplayScaleX
        }
      ]
    };

    const decrementBoxtranslateX = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [60, 0]
    });

    const decrementBoxTransformStyle = {
      transform: [
        {
          translateX: decrementBoxtranslateX
        },
        {
          scale: 0.7
        }
      ]
    };

    const textChangeScale = this.state.tapAnimation.interpolate({
      inputRange: [0, 0.2, 0.8, 1],
      outputRange: [1, 0.8, 1.25, 1]
    });

    const textChangeStyle = {
      transform: [
        {
          scale: textChangeScale
        }
      ]
    };

    return (
      <View style={{ flexDirection: "row" }}>
        <Animated.View
          style={[styles.counterDisplayStyle, counterDisplayTransformStyle]}
        >
          <Animated.Text style={[styles.quantityTextStyle, textChangeStyle]}>
            {this.props.counter}
          </Animated.Text>
        </Animated.View>
        <TouchableWithoutFeedback onPress={this.props.decreaseCount}>
          <Animated.View
            style={[
              styles.counterDefaultStyle,
              styles.counterDecrementStyle,
              decrementBoxTransformStyle
            ]}
          >
            <Ionicons name="md-remove" size={32} color="rgb(130, 130, 130)" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.startCounterAnimation}>
          <Animated.View
            style={[
              styles.counterDefaultStyle,
              styles.counterIncrementStyle,
              incrementBoxTransformStyle
            ]}
          >
            <Ionicons name="md-add" size={32} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counterDefaultStyle: {
    borderRadius: 30,
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.3,
    shadowOffset: { x: 0, y: 2 },
    shadowColor: "black",
    paddingTop: 4,
    marginLeft: 8
  },
  counterIncrementStyle: {
    backgroundColor: "rgb(49, 186, 201)"
  },
  counterDecrementStyle: {
    backgroundColor: "white",
    borderColor: "rgb(130, 130, 130)",
    borderWidth: 3
  },
  counterDisplayStyle: {
    backgroundColor: "rgb(240, 240, 240)",
    borderRadius: 30,
    borderColor: "rgb(240, 240, 240)",
    borderWidth: 1,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5
  },
  quantityTextStyle: {
    fontSize: 28,
    color: "rgb(130, 130, 130)"
  }
});

export default CounterButton;
