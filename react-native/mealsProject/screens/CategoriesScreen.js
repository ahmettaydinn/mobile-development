import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const Categories = () => {
  const renderCategoryItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={(item) => {
          item.data;
        }}
      />
    </View>
  );
};

export default Categories;
