import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface tabType {
	selectedTab: string;
}

const initialState: tabType = {
	selectedTab: "",
};

export const TabSlice = createSlice({
	name: "tab",
	initialState,
	reducers: {
		selectTab: (state, action: PayloadAction<string>) => {
			state.selectedTab = action.payload;
		},
	},
});

export const { selectTab } = TabSlice.actions;
export default TabSlice.reducer;
