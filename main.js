function mergeSort(nums1, nums2, n, m) {
    let cur1 = n-1
    let cur2 = m-1
    let curEnd = n+m-1
    while (cur2>=0) {
        if (nums2[cur2]>nums1[cur1]){
            nums1[curEnd] = nums2[cur2]
            cur2--
        }
        else {
            nums1[curEnd] = nums1[cur1]
            cur1--
        }
        curEnd--
    }
    return nums1
}

console.log(mergeSort([1,2,3,0,0,0],[2,5,6],3,3))