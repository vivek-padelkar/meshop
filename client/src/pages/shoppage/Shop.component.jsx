import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import { fetchCollectionStart } from '../../redux/shop/shop.actions'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)

const ShopPage = ({ fetchCollectionStart, isFetching }) => {
  useEffect(() => {
    fetchCollectionStart()
  }, [])

  return (
    <div className="shop-page">
      <CollectionOverviewWithSpinner isLoading={isFetching} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
})

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
