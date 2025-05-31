const placeList=document.getElementById('myid')
const li=document.createElement('li')
li.innerText='pahartoli bon'
placeList.appendChild(li )

console.log(li.innerText)

const placeholder=document.createElement('myplace')
placeholder.innerHTML=`
<ul>
        <li>uzbekistan</li>
        <li>uzbekistan</li>
        <li>uzbekistan</li>

    </ul>
`
placeList.appendChild(placeholder)