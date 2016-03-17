export default UserDataProvider;

function UserDataProvider(Restangular) {
    return Restangular.one('api').one('menus');
}