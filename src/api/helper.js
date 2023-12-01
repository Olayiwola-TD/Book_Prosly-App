import AsyncStorage from '@react-native-async-storage/async-storage';
import { Base_URL } from './constants';


export const login = async (email, password) => {

    var collectData = {
        email: email,
        password: password
    };
    const response = await fetch(`${Base_URL}login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const socialLogin = async (email) => {

    var collectData = {
        email: email
    };
    const response = await fetch(`${Base_URL}socialLogin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const signup = async (firstname, lastname, phoneNumber, email, password, cpassword) => {

    var collectData = {
        firstName: firstname,
        lastName: lastname,
        phone: phoneNumber,
        email: email,
        password: cpassword,
        profileImage: null,

    };

    const response = await fetch(`${Base_URL}signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const sendEmailOTP = async (email) => {

    var collectData = {
        email: email
    };
    const response = await fetch(`${Base_URL}sendEmail`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(collectData),
    })

    return response;
}

export const emailVerification = async (email, code) => {

    var collectData = {
        email: email,
        code: code,
    };
    const response = await fetch(`${Base_URL}verifyEmail`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(collectData),
    })

    return response;
}

export const passwordForgotEmail = async (email) => {

    var collectData = {
        email: email
    };
    const response = await fetch(`${Base_URL}forgot`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(collectData),
    })

    return response;
}

export const resetPassword = async (email, code, password) => {

    var collectData = {
        email: email,
        code: code,
        password: password,
    };
    const response = await fetch(`${Base_URL}resetPassword`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(collectData),
    })

    return response;
}

export const getUserProfile = async () => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const ID = await AsyncStorage.getItem('currentUserID');

    const response = await fetch(`${Base_URL}users/${ID}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })

    return response;
};

export const editUserProfile = async (firstName, lastName, phone) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const ID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        USER_ID: ID,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
    };

    const response = await fetch(`${Base_URL}updateProfile`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const editUserProfileImage = async (IMAGE) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const ID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        USER_ID: ID,
        photo: IMAGE
    };

    const response = await fetch(`${Base_URL}updateProfileImage`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const forgotPassword = async (email) => {

    var collectData = {
        email: email,
    };
    const response = await fetch(`${Base_URL}user/forget-password`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const addVehicle = async (image, vehicleYear, vehicleMake, vehicleType, vehicleModel) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        user_id: UID,
        vehicleYear: vehicleYear,
        vehicleMake: vehicleMake,
        vehicleType: vehicleType,
        vehicleModel: vehicleModel,
        vehicleImage: image,
    };

    const response = await fetch(`${Base_URL}createUserVehicle`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const getUserVehicle = async (image, name, number) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        user_id: UID
    };

    const response = await fetch(`${Base_URL}getUserVehicle`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const deleteUserVehicle = async (id) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        id: id,
        user_id: UID
    };

    const response = await fetch(`${Base_URL}deleteUserVehicle`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const imageUpload = async (photo) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const data = new FormData();

    data.append('photo', {
        uri: photo,
        type: 'image/jpg',
        name: photo,
    })

    const response = await fetch(`${Base_URL}uploadIMG`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'multipart/form-data',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: data,
    })

    return response;

};

export const addUserAddress = async (addressType, address) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        user_id: UID,
        addressType: addressType,
        address: address,
        latitude: 0,
        longitude: 0,
    };

    const response = await fetch(`${Base_URL}createUserAddress`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const getUserAddress = async (image, name, number) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        user_id: UID
    };

    const response = await fetch(`${Base_URL}getUserAddress`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const deleteUserAddress = async (id) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        id: id,
        user_id: UID
    };

    const response = await fetch(`${Base_URL}deleteUserAddress`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const addUserCard = async (cardNumber, cardExpiry, cardCVV, cardName, cardType) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        user_id: UID,
        cardName: cardName,
        cardNumber: cardNumber,
        cardExpiry: cardExpiry,
        cardCVV: cardCVV,
        cardType: cardType,
    };

    const response = await fetch(`${Base_URL}createUserPaymentMethod`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const getUserCards = async (cardNumber, cardExpiry, cardCVV, cardName, cardType) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        user_id: UID,
    };

    const response = await fetch(`${Base_URL}getUserPaymentMethod`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const deleteUserCards = async (id) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        id: id,
        user_id: UID
    };

    const response = await fetch(`${Base_URL}deleteUserPaymentMethod`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const createUserBooking = async (bookingDate, bookingTime, bookingPrice, bookingAddress, vehicleId, vehicleYear, vehicleMake, vehicleType, vehicleModel, vehicleImage, packageID, packageName, packageTime, packageItems) => {


    const ITEMS = []
    packageItems.map((item) => {
        ITEMS.push(item.title)
    })

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');
    const FIRST_NAME = await AsyncStorage.getItem('currentUserFIRSTNAME');
    const LAST_NAME = await AsyncStorage.getItem('currentUserLASTNAME');
    const PHONE = await AsyncStorage.getItem('currentUserPHONE');


    var collectData = {
        user_id: UID,
        firstName: FIRST_NAME,
        lastName: LAST_NAME,
        phoneNumber: PHONE,
        bookingDate: bookingDate,
        bookingTime: bookingTime,
        bookingPrice: bookingPrice,
        bookingAddress: bookingAddress,
        vehicleId: vehicleId,
        vehicleYear: vehicleYear,
        vehicleMake: vehicleMake,
        vehicleType: vehicleType,
        vehicleModel: vehicleModel,
        vehicleImage: vehicleImage,
        packageID: packageID,
        packageName: packageName,
        packageTime: packageTime,
        packageItems: ITEMS,
        status: "confirm",
    };

    const response = await fetch(`${Base_URL}createUserBooking`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const getUserBookings = async (cardNumber, cardExpiry, cardCVV, cardName, cardType) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        user_id: UID,
        status: 'confirm'
    };

    const response = await fetch(`${Base_URL}getUserBooking`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const getUserBookingsCancel = async (cardNumber, cardExpiry, cardCVV, cardName, cardType) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        user_id: UID,
        status: 'cancel'
    };

    const response = await fetch(`${Base_URL}getUserBooking`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const deleteCurrentUserAccount = async (id) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        user_id: UID
    };

    const response = await fetch(`${Base_URL}deleteAccount`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const stripePaymentInit = async (amount, currency) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        amount: amount,
        currency: currency,
    };

    const response = await fetch(`${Base_URL}stripePayment`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const getAllPackages = async () => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const response = await fetch(`${Base_URL}packageList`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })

    return response;
};

export const getAllPackagesItemsByID = async (ID) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const response = await fetch(`${Base_URL}packageItemsListByID`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            id: ID
        })
    })

    return response;
};

















export const getAllCategories = async () => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const response = await fetch(`${Base_URL}category`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })

    return response;
};

export const getAllProducts = async (PAGE_SIZE, PAGE_NO) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const response = await fetch(`${Base_URL}product?pageSize=${PAGE_SIZE}&pageNo=${PAGE_NO}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })

    return response;
};

export const searchProducts = async (PAGE_SIZE, PAGE_NO, WORD) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const response = await fetch(`${Base_URL}sellerProduct/search-seller-products?categoryId=&productName=${WORD}&pageSize=${PAGE_SIZE}&pageNo=${PAGE_NO}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })

    return response;
};

export const getAllSellersProducts = async (PAGE_SIZE, PAGE_NO) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const response = await fetch(`${Base_URL}sellerProduct/get-seller-products?pageSize=${PAGE_SIZE}&pageNo=${PAGE_NO}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })

    return response;
};

export const getAllSellerFeaturedProducts = async () => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    const response = await fetch(`${Base_URL}sellerProduct/get-seller-feature-products?id=${UID}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })

    return response;
};


export const getFilterSellersProducts = async (SORT_BY_PRICE, SORT_BY_PRICE_ORDER_BY, PRICE, DISCOUNT, EXPIRY, CATEGORY) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const response = await fetch(`${Base_URL}sellerProduct/get-filter-seller-products`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sortBy: SORT_BY_PRICE,
            orderBy: SORT_BY_PRICE_ORDER_BY,
            price: PRICE,
            discount: DISCOUNT,
            expiryDate: EXPIRY,
            categories: CATEGORY
        })
    })

    return response;
};

export const getAllProductsByCategoryID = async (ID, PAGE_SIZE, PAGE_NO) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    var collectData = {
        categoryId: ID,
        productName: ""
    };

    const response = await fetch(`${Base_URL}product/searchProduct?pageSize=${PAGE_SIZE}&pageNo=${PAGE_NO}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const getAllSellerProductsByCategoryID = async (ID) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const response = await fetch(`${Base_URL}sellerProduct/search-seller-products?categoryId=${ID}&pageSize=100000&pageNo=1`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
    })

    return response;
};

export const createProduct = async (image, expiry, quantity, price, discount, productId, categoryId, productNotes, isFeatured, minOrderQuantity, maxOrderQuantity) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    const data = new FormData();

    {
        image == "" ? null :
            data.append('productImages', {
                uri: image,
                type: 'image/jpg',
                name: image,
            })
    }
    data.append('expiryDate', expiry);
    data.append('price', price);
    data.append('discount', discount);
    data.append('userId', UID);
    data.append('productId', productId);
    data.append('categoryId', categoryId);
    data.append('notes', productNotes);
    data.append('quantity', quantity);
    data.append('isFeatured', isFeatured);
    data.append('minOrderQuantity', minOrderQuantity);
    data.append('maxOrderQuantity', maxOrderQuantity);

    const response = await fetch(`${Base_URL}sellerProduct`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'multipart/form-data',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: data,
    })

    return response;
};

export const getAllSellerProducts = async () => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    const response = await fetch(`${Base_URL}sellerProduct/get-seller-products?id=${UID}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })

    return response;
};

export const updateSellerProduct = async (ID, productTitle, productExpiry, productPrice, productQuantity) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    var collectData = {
        notes: productTitle,
        expiryDate: productExpiry,
        price: productPrice,
        quantity: productQuantity,
    };

    const response = await fetch(`${Base_URL}sellerProduct/${ID}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const deleteSellerProduct = async (ID) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    const response = await fetch(`${Base_URL}sellerProduct/${ID}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })

    return response;
};

export const getSellerSpecificProduct = async (ID) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const response = await fetch(`${Base_URL}sellerProduct/get-seller-specific-product?id=${ID}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
    })

    return response;
};

export const getSellerSpecificOrder = async (ID) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const response = await fetch(`${Base_URL}order/get-seller-specific-order?id=${ID}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
    })

    return response;
};

export const updateOrderStatusSeller = async (ID, STATUS) => {

    var collectData = {
        orderId: ID,
        status: STATUS,
    };

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const response = await fetch(`${Base_URL}order/update-status-order`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const becomeASeller = async (ID) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const UID = await AsyncStorage.getItem('currentUserID');

    const response = await fetch(`${Base_URL}user/becomeASeller/${UID}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
    })

    return response;
};

export const createUserOrder = async (total, discount, userid, notes, orderList) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    var collectData = {
        totalAmmount: total,
        discount: discount,
        userId: userid,
        notes: notes,
        orderList: orderList
    };

    const response = await fetch(`${Base_URL}order/create`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const getUserAllOrders = async () => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');

    const response = await fetch(`${Base_URL}order/get-user-all-order?userId=${USER_ID}&pageSize=100000&pageNo=1`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })

    return response;
};
export const getSellerAllOrders = async () => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');

    const response = await fetch(`${Base_URL}order/get-seller-all-order?id=${USER_ID}&pageSize=100000&pageNo=1`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })

    return response;
};

export const getAllPromotions = async () => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const response = await fetch(`${Base_URL}promotion?pageSize=100000&pageNo=1`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })

    return response;
};

export const getAllForSaleProducts = async (PAGE_SIZE, PAGE_NO) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const response = await fetch(`${Base_URL}sellerProduct/get-sale-products?pageSize=${PAGE_SIZE}&pageNo=${PAGE_NO}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })

    return response;
};

export const getAllHightDiscountProducts = async (PAGE_SIZE, PAGE_NO) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const response = await fetch(`${Base_URL}sellerProduct/get-highly-discount-products?pageSize=${PAGE_SIZE}&pageNo=${PAGE_NO}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })

    return response;
};

export const getAllFeaturedProducts = async (PAGE_SIZE, PAGE_NO) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const response = await fetch(`${Base_URL}sellerProduct/get-seller-feature-products?pageSize=${PAGE_SIZE}&pageNo=${PAGE_NO}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })

    return response;
};

export const updateEmail = async (email) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        id: USER_ID,
        email: email
    };
    const response = await fetch(`${Base_URL}user/me`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const updateAddress = async (address) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        id: USER_ID,
        address: address
    };
    const response = await fetch(`${Base_URL}user/me`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const supportMessage = async (subject, message, toggleCheckBox) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        subject: subject,
        message: message,
        userId: USER_ID,
        isSeller: toggleCheckBox == false ? false : true,
        isBuyer: toggleCheckBox == false ? true : false,
    };
    const response = await fetch(`${Base_URL}feedback`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const refundRequest = async (ORDER_ID, SELLER_PRODUCT_ID, reason) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        sellerProductId: SELLER_PRODUCT_ID,
        reason: reason,
        userId: USER_ID,
        orderId: ORDER_ID,
    };
    const response = await fetch(`${Base_URL}refund`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const createProductRating = async (ORDER_ID, SELLER_PRODUCT_ID, reason, Default_Rating) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');
    const USER_NAME = await AsyncStorage.getItem('currentUserNAME');

    var collectData = {
        sellerProductId: SELLER_PRODUCT_ID,
        description: reason,
        userId: USER_ID,
        orderId: ORDER_ID,
        ratingCount: Default_Rating,
        userName: USER_NAME,
    };
    const response = await fetch(`${Base_URL}rating`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const updateViewCount = async (PRODUCT_ID) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');

    const response = await fetch(`${Base_URL}sellerProduct/update-view-count/${PRODUCT_ID}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        }
    })

    return response;
};

export const updateProfileImage = async (image) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');

    const data = new FormData();

    data.append('profileImage', {
        uri: image,
        type: 'image/jpg',
        name: image,
    })

    data.append('id', USER_ID);

    const response = await fetch(`${Base_URL}user/me`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'multipart/form-data',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: data,
    })

    return response;
};

export const updateSellerPharmacyAndBusinessName = async (pharmacyName, businessId) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');
    console.log(USER_ID)
    var collectData = {
        id: USER_ID,
        pharmacyName: pharmacyName,
        businessId: businessId
    };
    const response = await fetch(`${Base_URL}user/me`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const updateProfile = async (firstname, lastname, address, city, region) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');

    var collectData = {
        id: USER_ID,
        firstName: firstname,
        lastName: lastname,
        address: address,
        city: city,
        region: region
    };
    const response = await fetch(`${Base_URL}user/me`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(collectData),
    })

    return response;
};

export const uploadPharmacyLicense = async (file, type, name) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');

    const data = new FormData();

    data.append('pharmacyLicenseDoc', {
        uri: file,
        type: type,
        name: name,
    })

    data.append('id', USER_ID);

    const response = await fetch(`${Base_URL}user/upload-pharmacy-license-doc`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'multipart/form-data',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: data,
    })

    return response;
};

export const uploadTaxID = async (file, type, name) => {

    const TOKEN = await AsyncStorage.getItem('currentUserToken');
    const USER_ID = await AsyncStorage.getItem('currentUserID');

    const data = new FormData();

    data.append('taxIdDoc', {
        uri: file,
        type: type,
        name: name,
    })

    data.append('id', USER_ID);

    const response = await fetch(`${Base_URL}user/upload-taxId-doc`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'multipart/form-data',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: data,
    })

    return response;
};