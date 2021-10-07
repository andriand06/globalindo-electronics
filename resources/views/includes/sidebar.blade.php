 <!-- Left Panel -->
 <aside id="left-panel" class="left-panel">
    <nav class="navbar navbar-expand-sm navbar-default">
        <div id="main-menu" class="main-menu collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="active">
                    <a href="/dashboard"><i class
                        ="menu-icon fa fa-laptop"></i>Dashboard </a>
                </li>
                <li class="menu-title">Koleksi</li><!-- /.menu-title -->
                <li class="">
                    <a href="{{ route('collections.index')}}"> <i class="menu-icon fa fa-list"></i>Lihat Koleksi</a>
                </li>
                <li class="">
                    <a href="{{ route('collections.create')}}"> <i class="menu-icon fa fa-plus"></i>Tambah Koleksi</a>
                </li>

                <li class="menu-title">Item Koleksi</li><!-- /.menu-title -->
                <li class="">
                    <a href="{{ route('collectionitems.index')}}"> <i class="menu-icon fa fa-list"></i>Lihat Item Koleksi</a>
                </li>
                <li class="">
                    <a href="{{ route('collectionitems.create')}}"> <i class="menu-icon fa fa-plus"></i>Tambah Item Koleksi</a>
                </li>

                <li class="menu-title">Transaksi</li><!-- /.menu-title -->
                <li class="">
                   
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </nav>
</aside>
<!-- /#left-panel -->