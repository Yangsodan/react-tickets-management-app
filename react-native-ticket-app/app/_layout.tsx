import { Icons } from "@/shared/Icons";
import { Stack, useRouter } from "expo-router";

export default function RootLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Tickets",
          headerRight: () => (
            <Icons
              name="add"
              size={28}
              onPress={() => {
                router.push("/Tickets/new");
              }}
            />
          ),
        }}
      />
    </Stack>
  );
}
