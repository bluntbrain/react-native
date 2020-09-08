# react-native
my code snippets for React Native

Port 8081 already in use <br>
kill -9 $(lsof -t -i:8081)<br>

For debug build <br>
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res<br>
cd android/<br>
./gradlew assembleDebug<br>
