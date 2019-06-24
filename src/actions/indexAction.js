import * as types from './../constants/indexConstant';
export const showProduct = (num) => {
    return {
        type: types.SHOW_PRODUCT,
        num: num
    }
}
export const orderProduct = (value) => {
    return {
        type: types.ORDER_PRODUCT,
        value: value
    }
}
export const filterProduct = (filter) => {
    return {
        type: types.FILTER_PRODUCT,
        filter: filter
    }
}
export const changeStyle = (isGrid) => {
    return {
        type: types.CHANGE_STYLE,
        isGrid: isGrid
    }
}
export const selectProduct = (idProduct) => {
    return {
        type: types.SELECT_PRODUCT,
        idProduct: idProduct
    }
}
export const isSelectProduct = (isSelectProduct) => {
    return {
        type: types.IS_SELECT_PRODUCT,
        isSelectProduct: isSelectProduct
    }
}
export const changeTab = (idTab) => {
    return {
        type: types.CHANGE_TAB,
        idTab: idTab
    }
}