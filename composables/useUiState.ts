import Vue from 'vue';
import VueCompositionAPI, { reactive, computed } from '@vue/composition-api';

// We need to register it again because of Vue instance instantiation issues
Vue.use(VueCompositionAPI);

const state = reactive({
  isCartSidebarOpen: false,
  isWishlistSidebarOpen: false,
  isModalOpen: false,
  isCategoryGridView: true,
  isFilterSidebarOpen: false,
});

const useUiState = () => {
  const isCartSidebarOpen = computed(() => state.isCartSidebarOpen);
  const toggleCartSidebar = () => {
    state.isCartSidebarOpen = !state.isCartSidebarOpen;
  };

  const isWishlistSidebarOpen = computed(() => state.isWishlistSidebarOpen);
  const toggleWishlistSidebar = () => {
    state.isWishlistSidebarOpen = !state.isWishlistSidebarOpen;
  };

  const isModalOpen = computed(() => state.isModalOpen);
  const toggleModal = () => {
    state.isModalOpen = !state.isModalOpen;
  };

  const isCategoryGridView = computed(() => state.isCategoryGridView);
  const toggleCategoryGridView = () => {
    state.isCategoryGridView = !state.isCategoryGridView;
  };

  const isFilterSidebarOpen = computed(() => state.isFilterSidebarOpen);
  const toggleFilterSidebar = () => {
    state.isFilterSidebarOpen = !state.isFilterSidebarOpen;
  };

  return {
    isCartSidebarOpen,
    isWishlistSidebarOpen,
    isModalOpen,
    isCategoryGridView,
    isFilterSidebarOpen,
    toggleCartSidebar,
    toggleWishlistSidebar,
    toggleModal,
    toggleCategoryGridView,
    toggleFilterSidebar,
  };
};

export default useUiState;
