const mapStateToProps = (state)=> {
    return {
      historyList: state.search.historyList
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
      keyDown: (data)=> dispatch({
        type: 'Search',
        data
      })
    }
}

export {
    mapStateToProps,
    mapDispatchToProps
}