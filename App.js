import { PaperProvider, Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { ScrollView, Text, View, Image } from 'react-native';
import userData from "./data.json"
import styles from "./App.style"

// export default function App() {
//   // console.log(userData.users);
//   return (
//     <ScrollView>
//       {userData.users.map((user) => {
//         return (
//           <View style={styles.container} key={user.name}>
//             <View style={styles.card}>
//               <Image
//                 source={{
//                   uri: user.photo_url,
//                 }}
//                 style={styles.avatar} />
//               <View style={styles.boldText}>
//                 <Text style={styles.boldText}>{user.name}</Text>
//                 <Text>{user.email}</Text>
//               </View>
//             </View>
//           </View>
//         )
//       })}
//     </ScrollView>
//   )
// }

const App = () => {
  return (
    <PaperProvider>
      <View>
        <ScrollView>
          {userData.users.map((user) => {
            return (
              <Card style={{ marginVertical: 8 }} key={user.name}>
                <Card.Title title={user.name} />
                <Card.Content>
                  <Avatar.Image size={48} source={{ uri: user.photo_url }} />
                  <Title>{user.name}</Title>
                  <Paragraph>{user.email}</Paragraph>
                </Card.Content>
              </Card>
              // <View style={styles.container} key={user.name}>
              //   <View style={styles.card}>
              //     <Image
              //       source={{
              //         uri: user.photo_url,
              //       }}
              //       style={styles.avatar} />
              //     <View style={styles.boldText}>
              //       <Text style={styles.boldText}>{user.name}</Text>
              //       <Text>{user.email}</Text>
              //     </View>
              //   </View>
              // </View>
            )
          })}
        </ScrollView>
      </View>
    </PaperProvider>
  )
}

export default App;

