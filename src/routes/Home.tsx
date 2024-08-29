import { FaStar, FaRegHeart } from "react-icons/fa";
import {
  Box,
  Grid,
  Button,
  HStack,
  Image,
  Text,
  VStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import Room from "../components/Room";

export default function Home() {
  return (
    <Grid
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
      columnGap={4}
      rowGap={8}
      // 반응형 설정
      templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
    >
      <Box>
        <Skeleton rounded="2xl" height={280} mb={3} />
        <SkeletonText noOfLines={3} />
      </Box>
    </Grid>
  );
}
