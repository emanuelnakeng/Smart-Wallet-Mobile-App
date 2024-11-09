# Weru Project Report and Reflection

## Project Overview

**Weru** is a mobile wallet application designed to help users store and manage loyalty cards. The app is built using **React Native** and **Expo**, allowing it to work seamlessly across both iOS and Android platforms. The main objective of the project was to create an easy-to-use platform that offers users the ability to store an unlimited number of loyalty cards, making it convenient for them to access and manage all their rewards in one place.

The app offers key features such as barcode scanning, bottom navigation, anonymous login, light and dark theme modes, and more. Featuring clean, well-structured code and reusable components.

## Goals and Objectives

The key goals of the **Weru** project were:

- To create a mobile wallet that could store unlimited loyalty cards.
- To provide a customizable and user-friendly experience with both **light** and **dark modes**.
- To allow easy navigation and interaction through a bottom navigation bar and barcode scanning.
- To implement reusable and modular components that could be easily customized and scaled by developers.

### Features Implemented

The app includes a variety of features aimed at enhancing user experience and offering flexibility for developers:

1. **Unlimited Card Storage**: Users can add an unlimited number of loyalty cards, and each card can be accessed quickly within the app.
2. **Barcode Scanner**: Scans barcodes to add new loyalty cards with ease.
3. **Customizable Themes**: Users can choose between **light** and **dark** themes based on their preference.
4. **Bottom Navigation**: Simplifies navigation by providing easy access to all major sections of the app.
5. **Anonymous Login**: Users can start using the app immediately without needing to create an account, making the app more accessible.

## Technologies Used

- **React Native**: The core framework used to build the app, enabling it to work on both iOS and Android platforms.
- **Expo**: A powerful toolchain for React Native development, providing additional tools for building, testing, and deploying the app.
- **React Navigation**: Used to manage transitions and navigation between app screens.
- **Zustand**: A minimal state management library used for efficient data handling throughout the app.
- **React Native Lottie**: For adding animations that enhance the user experience.
- **Expo Barcode Generator**: To easily generate and display barcode images.
- **React Native Reanimated**: For creating smooth animations with better performance.
- **React Native Gesture Handler**: Handles gestures within the app, such as swiping and tapping.

## Development Process

The development of **Weru** followed a systematic approach, beginning with a detailed requirement gathering phase and followed by design and coding phases. Here's a breakdown of the key stages:

1. **Planning and Design**: The initial design of the app was focused on simplicity and usability. A wireframe was created to visualize the user flow and ensure a smooth experience from one screen to the next. The app was designed to be visually appealing and lightweight, with a focus on ease of use.
   
2. **Development**: After designing the app's UI, the coding phase began. The project was developed using **React Native** and **Expo** to ensure cross-platform compatibility. Key libraries such as **React Navigation** and **Zustand** were incorporated to handle navigation and state management efficiently.
   
3. **Testing**: The app was tested on both iOS and Android platforms using the **Expo Go** app. Tests focused on functionality (such as barcode scanning, theme switching, and card management) as well as performance to ensure fast loading times.

4. **Deployment**: Once the app was fully developed and tested, the next step was preparing it for deployment. 

## Challenges and Solutions

During the development process, several challenges arose:

1. **State Management**: Implementing a simple and scalable state management solution proved to be a challenge early on. Using **Zustand**, a minimal and fast state management tool, helped keep the codebase clean and efficient.
   
2. **Customizing Barcode Scanning**: Ensuring the barcode scanning function was accurate across different devices required significant testing. Using Expo’s **Barcode Scanner** package, I was able to implement a robust solution that worked reliably on both iOS and Android.
   

## Reflection

Reflecting on the **Weru** project, several key takeaways can be noted:

- **Importance of Simplicity**: Keeping the user interface simple and intuitive proved to be a key factor in the app’s success. The goal was to make it as easy as possible for users to add, manage, and access their loyalty cards without any complexity.
  
- **Reusable Components**: By creating reusable components and maintaining modular code, the app is highly customizable and scalable, allowing developers to easily extend the functionality or adjust the app to their needs.
  
- **User-Centric Design**: Features like anonymous login, barcode scanning, and unlimited card storage were implemented to make the app as user-friendly and accessible as possible. The ability to switch between light and dark themes was also designed to provide a more personalized experience.

- **Performance Optimization**: Ensuring the app loads quickly and performs efficiently, even with multiple cards stored, was a priority. The app was optimized for speed by reducing unnecessary components and improving rendering performance.

### Future Improvements

While **Weru** is functional and easy to use, there are several potential improvements for future versions:

1. **Advanced Card Management**: Users could benefit from additional card organization features, such as categorizing cards or adding notes to each card.
2. **App Security**: Adding features like user authentication or PIN protection would improve security, especially for users storing sensitive information in the app.
3. **Cloud Sync**: Allow users to sync their cards across devices via cloud storage, ensuring that cards are always available, no matter which device they use.

## Preview

![Weru Mobile Wallet](https://cdn.dribbble.com/userupload/17023520/file/original-3c0323a69c045ccb4fa9e94ae4b487d8.png?resize=1024x1041)

![Weru Mobile Wallet](https://cdn.dribbble.com/userupload/17484494/file/original-eca12462c567fe0f57f5639c391b8677.png?resize=1180x1058).

## Conclusion

The **Weru** project successfully meets its goals of providing a simple, customizable, and user-friendly mobile wallet for loyalty cards. The project was an excellent opportunity to practice and demonstrate skills in **React Native** and **Expo** while delivering a functional, high-quality app. With its lightweight design, reusable components, and easy customization, **Weru** serves as an excellent template for anyone looking to build a mobile loyalty card app.

---







